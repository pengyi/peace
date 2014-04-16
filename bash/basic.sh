#!/bin/bash
#comment or #    comment

var="a string variable"   #   define a variable
echo $var #   use a varibale

magic=99

read guess
if [ $guess -eq 99 ]; then
    echo 'it is magical!'
else
    echo 'just so so'
fi

exit
