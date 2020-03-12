(function() {
	var fs = require('fs');
	var path = require('path');
	var karmaConfigParser = require('karma').config;
	var glob = require('glob');
	var HtmlWebpackPlugin = require('html-webpack-plugin');

	const AWS = require('aws-sdk');
	AWS.config.update({
		region: 'ap-south-1'
	});

	var ec2_service = new AWS.EC2({
		apiVersion: '2016-11-15'
	});

	var ssm_service = new AWS.SSM({
		apiVersion: '2014-11-06'
	});

	function SolutionConfig(
		DEFAULTS,
		solutionDir,
		commonConfigs,
		solutionConfigOptions
	) {
		var {
			DEFAULT_FOLDER_STRING,
			DEFAULT_LINT__GLOBAL,
			DEFAULT_UTILS_DIR,
			DEFAULT_DISTRIBUTION_DIR
		} = DEFAULTS;

		var {
			lintConfig,
			browserTestConfig,
			jestTestConfig,
			bundleConfig
		} = commonConfigs;

		var solutionConfig = solutionConfigOptions.solution;
		var solutionDependencies = solutionConfigOptions.dependencies;
		var solutionEnvironments = solutionConfigOptions.environments;

		var isBrowser = solutionConfig.browser;
		var isBrowserTest = solutionConfig.browser.test;
		var isBrowserBundle = solutionConfig.browser.bundle;

		if (solutionEnvironments) {
			var isCloudDeploy = solutionEnvironments.cloud.enabled;
			var isDependencies = solutionEnvironments.cloud.includeDependencies;
			var solutionMetadata = solutionEnvironments.cloud.metadata;
			var isNodeServer =
				solutionEnvironments.workstation.instance.parameters.server;
			var isNodeDB = solutionEnvironments.workstation.instance.parameters.db;
		}

		var SOURCE_DIR = `${DEFAULT_FOLDER_STRING}/${solutionDir}`;

		if (isBrowser) {
			var BROWSER_LINT_PATTERN__PARAM = ['**/*.js'];

			var BROWSER_LINT_PATTERN = (function(param, inputDir) {
				return param.map(function(pattern) {
					if (pattern.includes('!')) {
						return `!${inputDir}/${pattern.split('!')[1]}`;
					} else {
						return `${inputDir}/${pattern}`;
					}
				});
			})(BROWSER_LINT_PATTERN__PARAM, SOURCE_DIR);

			var BROWSER_DIR__PARAM = solutionConfig.dirs.browser;
			var BROWSER_DIR = (function(param, inputDir) {
				if (param) {
					return param.map(function(folder) {
						return `${inputDir}/${folder}`;
					});
				} else {
					return false;
				}
			})(BROWSER_DIR__PARAM, SOURCE_DIR);
		}

		var OUTPUT_DIR__PARAM = DEFAULT_DISTRIBUTION_DIR;
		var OUTPUT_DIR__GROUP = (function(param, inputDir) {
			return `${inputDir}/${param}`;
		})(OUTPUT_DIR__PARAM, SOURCE_DIR);

		var DEVELOPMENT_DIR__PARAM = solutionConfig.dirs.development;
		var DEPLOY_DIR__PARAM = solutionConfig.dirs.deploy;

		var OUTPUT_DIR = `${DEFAULT_DISTRIBUTION_DIR}/${solutionDir}`;

		if (isBrowserTest) {
			var BROWSER_TEST_RUNNER__PARAM = solutionConfig.browser.test.runner;
			var BROWSER_TEST_PATTERN__PARAM = solutionConfig.browser.test.pattern;
			var BROWSER_TEST_OPTIONS;
			var BROWSER_TEST_PATTERN;

			BROWSER_TEST_PATTERN = (function(param, inputDir) {
				return param.map(function(item) {
					return `${inputDir}/${item}`;
				});
			})(BROWSER_TEST_PATTERN__PARAM, SOURCE_DIR);

			if (BROWSER_TEST_RUNNER__PARAM === 'jest') {
				let { jestConfig } = jestTestConfig;
				var jestBrowserTestConfig = Object.assign({}, jestConfig);

				let BROWSER_JEST_TEST_PATTERN = (function(param, inputDir) {
					return param.map(function(item) {
						return `${inputDir}/${item}`;
					});
				})(BROWSER_TEST_PATTERN__PARAM, '<rootDir>');

				let jestTransformerPath = path.resolve(
					DEFAULT_UTILS_DIR,
					'jest-transformer'
				);

				jestBrowserTestConfig.rootDir = SOURCE_DIR;
				jestBrowserTestConfig.testEnvironment = 'jsdom';
				jestBrowserTestConfig.testMatch = BROWSER_JEST_TEST_PATTERN;
				jestBrowserTestConfig.reporters = ['default'];
				jestBrowserTestConfig.transform = JSON.stringify({
					'^.+\\.(js|jsx)?$': jestTransformerPath
				});
				jestBrowserTestConfig.verbose = true;

				BROWSER_TEST_OPTIONS = {
					runner: BROWSER_TEST_RUNNER__PARAM,
					pattern: BROWSER_TEST_PATTERN,
					config: jestBrowserTestConfig
				};
			} else if (BROWSER_TEST_RUNNER__PARAM === 'karma') {
				var preprocessConfig = bundleConfig.browser.module;

				var BROWSER_TEST_CONFIG = (function(pattern, config, preprocessor) {
					var override = {
						files: pattern,
						preprocessors: {},
						webpack: {
							module: preprocessor
						}
					};

					pattern.map(function(item) {
						override.preprocessors[item] = ['webpack'];
					});

					var browserTestConfig = karmaConfigParser.parseConfig(
						path.resolve(config.path),
						override
					);

					return browserTestConfig;
				})(BROWSER_TEST_PATTERN, browserTestConfig, preprocessConfig);

				BROWSER_TEST_OPTIONS = {
					runner: BROWSER_TEST_RUNNER__PARAM,
					pattern: BROWSER_TEST_PATTERN,
					config: BROWSER_TEST_CONFIG
				};
			} else {
				throw new Error('Browser test runner not configured');
			}
		}

		if (isBrowserBundle) {
			var BROWSER_BUNDLE_ENTRY__PARAM = solutionConfig.browser.bundle.entry;
			var BROWSER_BUNDLE_OUTPUT_DIR__PARAM =
				solutionConfig.browser.bundle.output.dir;
			var BROWSER_BUNDLE_OUTPUT_FILE__PARAM =
				solutionConfig.browser.bundle.output.file;

			var BROWSER_BUNDLE_ENTRY = (function(param, inputDir) {
				return `${inputDir}/${param}`;
			})(BROWSER_BUNDLE_ENTRY__PARAM, SOURCE_DIR);

			var BROWSER_BUNDLE_OUTPUT_DIR = (function(param, inputDir) {
				return `${inputDir}/${param}`;
			})(BROWSER_BUNDLE_OUTPUT_DIR__PARAM, OUTPUT_DIR);

			var BROWSER_BUNDLE_OUTPUT_FILE = BROWSER_BUNDLE_OUTPUT_FILE__PARAM;

			var BROWSER_TEMPLATE_DIR__PARAM = solutionConfig.browser.template.dir;
			var BROWSER_TEMPLATE_PAGE_DIR__PARAM =
				solutionConfig.browser.template.page.dir;
			var BROWSER_TEMPLATE_PAGE_FILE__PARAM =
				solutionConfig.browser.template.page.file;
			var BROWSER_TEMPLATE_PAGE_DATA__PARAM =
				solutionConfig.browser.template.page.data;

			var BROWSER_TEMPLATE_DIR = (function(param, inputDir) {
				return `${inputDir}/${param}`;
			})(BROWSER_TEMPLATE_DIR__PARAM, SOURCE_DIR);

			var BROWSER_TEMPLATE_PAGE_DIR = (function(param, inputDir) {
				return `${inputDir}/${param}`;
			})(BROWSER_TEMPLATE_PAGE_DIR__PARAM, BROWSER_TEMPLATE_DIR);

			var BROWSER_TEMPLATE_PAGES = (function(inputDir) {
				return glob.sync(`${inputDir}/*`);
			})(BROWSER_TEMPLATE_PAGE_DIR);

			var BROWSER_TEMPLATE_PAGE_FILE = BROWSER_TEMPLATE_PAGE_FILE__PARAM;
			var BROWSER_TEMPLATE_PAGE_DATA = BROWSER_TEMPLATE_PAGE_DATA__PARAM;

			var browserTemplateConfig = (function(pages, filename, dataname) {
				var htmlConfigs = pages.map(function(page) {
					var pageTemplate = `${page}/${filename}`;

					var pageData = fs.readFileSync(`${page}/${dataname}`);
					var parsedData = JSON.parse(pageData);

					return new HtmlWebpackPlugin({
						template: pageTemplate,
						templateParameters: parsedData.templateParams,
						filename: parsedData.metadata.outputFileName
					});
				});

				return htmlConfigs;
			})(
				BROWSER_TEMPLATE_PAGES,
				BROWSER_TEMPLATE_PAGE_FILE,
				BROWSER_TEMPLATE_PAGE_DATA
			);

			var browserBundleConfig = (function(
				config,
				entry,
				outputDir,
				outputFile,
				templateConfigs
			) {
				var newConfig = Object.assign({}, config);

				newConfig.entry = path.resolve(entry);
				newConfig.output.path = path.resolve(outputDir);
				newConfig.output.publicPath = '/';
				newConfig.output.filename = outputFile;

				if (isCloudDeploy) {
					newConfig.mode = solutionEnvironments.cloud.mode;
				}

				templateConfigs.map(function(config) {
					newConfig.plugins.push(config);
				});

				return newConfig;
			})(
				bundleConfig.browser,
				BROWSER_BUNDLE_ENTRY,
				OUTPUT_DIR,
				BROWSER_BUNDLE_OUTPUT_FILE,
				browserTemplateConfig
			);
		}

		if (isCloudDeploy) {
			var solutionPackages = solutionDependencies;
			var globalSolutionConfig = require('../../package.json');

			var solutionPkgConfig = (function(config, metadata, listings) {
				var dependenciesObj = {};

				listings.map(function(listing) {
					dependenciesObj[listing] = config['dependencies'][listing];
				});

				delete config.devDependencies;
				config.dependencies = dependenciesObj;
				config.name = metadata.name;

				return config;
			})(globalSolutionConfig, solutionMetadata, solutionPackages);

			var isCloudServer = solutionEnvironments.cloud.parameters.server;
			var isCloudDB = solutionEnvironments.cloud.parameters.db;
		}

		this.config = {
			browser: isBrowser
				? {
						lint: {
							pattern: OUTPUT_DIR__PARAM
								? [
										...BROWSER_LINT_PATTERN,
										`!${DEFAULT_DISTRIBUTION_DIR}/**/*.js`
								  ]
								: [...BROWSER_LINT_PATTERN],
							options: lintConfig
						},
						test: isBrowserTest ? BROWSER_TEST_OPTIONS : false,
						bundle: browserBundleConfig ? browserBundleConfig : false
				  }
				: false,
			build:
				!isCloudDeploy && (isNodeServer || isNodeDB || isNodeBundle)
					? {
							dirs: {
								source: SOURCE_DIR ? SOURCE_DIR : false,
								browser: SOURCE_DIR ? SOURCE_DIR : false,
								output: OUTPUT_DIR,
								serve: OUTPUT_DIR
							}
					  }
					: false,
			deploy: isCloudDeploy
				? {
						prepare: {
							includeDependencies: isDependencies ? isDependencies : false,
							solutionPkgConfig: solutionPkgConfig ? solutionPkgConfig : false
						}
				  }
				: false
		};

		this.replaceWithSSM = async function(parameter) {
			var cacheFile = path.resolve(`${SOURCE_DIR}/.tmp/aws.cache.json`);

			var ssmParameterCache = (function() {
				if (fs.existsSync(cacheFile)) {
					return require(cacheFile);
				} else {
					fs.mkdirSync(`${SOURCE_DIR}/.tmp`);
					return {};
				}
			})();

			var ssmTagPattern = /(ssm:)(\W\w+)/;

			if (ssmTagPattern.test(parameter)) {
				let ssmParameterName = parameter.replace(ssmTagPattern, '$2');

				if (ssmParameterCache[ssmParameterName]) {
					return ssmParameterCache[ssmParameterName];
				} else {
					let ssmParamDetails = {
						Name: `${ssmParameterName}`,
						WithDecryption: true
					};

					let fetchedParamDetails = await ssm_service
						.getParameter(ssmParamDetails)
						.promise();

					let fetchedParamValue = fetchedParamDetails.Parameter.Value;

					ssmParameterCache[ssmParameterName] = fetchedParamValue;

					fs.writeFileSync(
						cacheFile,
						JSON.stringify(ssmParameterCache, null, 4)
					);

					return fetchedParamValue;
				}
			} else {
				return parameter;
			}
		};

		this.getAsyncData = async function() {
			var instancesConfig = {};
			var commandsConfig = {};
			var cloudDBHostName = false;

			if (isCloudDeploy) {
				var { instances } = solutionEnvironments.cloud;

				instancesConfig.start = [];
				instancesConfig.create = [];

				for (let instance = 0; instance < instances.length; instance++) {
					let instanceFilters = {
						Filters: instances[instance].config.filters
					};

					let instanceDetails = await ec2_service
						.describeInstances(instanceFilters)
						.promise();

					if (instanceDetails.Reservations.length) {
						let instanceState =
							instanceDetails.Reservations[0].Instances[0].State.Name;
						let instanceId =
							instanceDetails.Reservations[0].Instances[0].InstanceId;

						if (instanceState === 'stopped') {
							instancesConfig.start.push(instanceId);
						} else {
							console.log(
								`${instanceId} cannot be started, as it is in ${instanceState} state`
							);
						}
					} else {
						let instanceParams = instances[instance].setup.compute.parameters;

						if (instanceParams.UserData) {
							instanceParams.UserData = new Buffer(
								instanceParams.UserData.join('\n')
							).toString('base64');
						}

						instancesConfig.create.push(instances[instance].setup);
					}
				}

				if (isCloudServer) {
					var NODE_CLOUD_SERVER_ENV_PARAMS =
						solutionEnvironments.cloud.parameters.server;
					let ssmResolvedParams = {};

					for (let param in NODE_CLOUD_SERVER_ENV_PARAMS) {
						ssmResolvedParams[param] = await this.replaceWithSSM(
							NODE_CLOUD_SERVER_ENV_PARAMS[param]
						);
					}

					var NODE_CLOUD_SERVER_PARAMS = {
						port: ssmResolvedParams.port,
						serveDir: BROWSER_BUNDLE_OUTPUT_DIR__PARAM
					};

					this.config.deploy.parameters = {};
					this.config.deploy.parameters.env = {};
					this.config.deploy.parameters.env.server = NODE_CLOUD_SERVER_PARAMS;
				}

				if (!(instancesConfig.create.length && instancesConfig.start.length)) {
					for (let instance = 0; instance < instances.length; instance++) {
						let instanceFilters = {
							Filters: instances[instance].config.filters
						};

						let instanceDetails = await ec2_service
							.describeInstances(instanceFilters)
							.promise();

						if (instanceDetails.Reservations.length) {
							let instanceId =
								instanceDetails.Reservations[0].Instances[0].InstanceId;
							let instanceCommands = instances[instance].commands;

							if (isCloudDB) {
								if (instances[instance].config.type === 'db') {
									cloudDBHostName =
										instanceDetails.Reservations[0].Instances[0].PublicDnsName;
								}

								var NODE_CLOUD_DB_ENV_PARAMS =
									solutionEnvironments.cloud.parameters.db;
								var NODE_CLOUD_DB_HOSTNAME = cloudDBHostName;
								let ssmResolvedParams = {};

								for (let param in NODE_CLOUD_DB_ENV_PARAMS) {
									ssmResolvedParams[param] = await this.replaceWithSSM(
										NODE_CLOUD_DB_ENV_PARAMS[param]
									);
								}

								if (NODE_CLOUD_DB_HOSTNAME) {
									var NODE_CLOUD_DB_PARAMS = {
										connectionURL: `${ssmResolvedParams.protocol}${
											ssmResolvedParams.username
												? ssmResolvedParams.username
												: ':'
										}${
											ssmResolvedParams.password
												? ssmResolvedParams.password
												: '@'
										}${NODE_CLOUD_DB_HOSTNAME}:${ssmResolvedParams.port}`,
										name: `${ssmResolvedParams.name}`
									};
								} else {
									console.log(
										'DB Instance not configured. No host found running'
									);
								}

								this.config.deploy.parameters.env.db = NODE_CLOUD_DB_PARAMS;
							}

							for (let command in instanceCommands) {
								commandsConfig[command] = {};
								commandsConfig[command]['Parameters'] = {};
								commandsConfig[command]['InstanceIds'] = [];

								if (instanceCommands[command]['inject'] === true) {
									let injectParams = this.config.deploy.parameters;

									let paramResolvedCommand = instanceCommands[command][
										'commands'
									].map(function(command) {
										let injectParamPattern = /(calc:{)(\w+)(})/;

										if (injectParamPattern.test(command)) {
											let injectParamName = command.match(
												injectParamPattern
											)[2];
											let injectParamResolved = `"${JSON.stringify(
												injectParams[injectParamName]
											).replace(/"/g, '\\"')}"`;
											command = command.replace(
												injectParamPattern,
												injectParamResolved
											);
										}

										return command;
									});

									commandsConfig[command]['Parameters'][
										'commands'
									] = paramResolvedCommand;
								} else {
									commandsConfig[command]['Parameters']['commands'] =
										instanceCommands[command]['commands'];
								}

								commandsConfig[command]['DocumentName'] =
									instanceCommands[command]['documentType'];
								commandsConfig[command]['InstanceIds'].push(instanceId);
							}
						}
					}
				}
			}

			var asyncData = {
				instances: Object.keys(instancesConfig).length
					? instancesConfig
					: false,
				commands: Object.keys(commandsConfig).length ? commandsConfig : false
			};

			return asyncData;
		};
	}

	SolutionConfig.prototype.getConfig = async function() {
		var asyncDataResolved = await this.getAsyncData();

		if (this.config.deploy) {
			this.config.deploy.instances = asyncDataResolved.instances;
			this.config.deploy.commands = asyncDataResolved.commands;
		}

		return this.config;
	};

	var publicAPI = {
		SolutionConfig
	};

	module.exports = publicAPI;
})();
