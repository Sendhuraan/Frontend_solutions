This example uses `shouldComponentUpdate` lifecycle method, to determine whether the input is multiple of 10.

This is a bad example, as the value will remain not updated, when we change the value from multiple of 10 to not a multiple. 

input -> 5 => You can buy 0 coins (no update. Good !)
input -> 50 => You can buy 5 coins (update. Good !)

Now, remove 0
input -> 5 => You can buy 5 coins (no update. Bad !)
