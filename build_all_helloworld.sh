#!/bin/bash

cd hello-world
for d in */ ; do    
    cd "$d"
    sam build 
    cd ..
done
cd ..
