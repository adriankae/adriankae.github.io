#!/usr/bin/env python3

import os
import sys

join = os.path.join

path = '/Users/adrian/Documents/github_pages/docs/assets/images'

try:
    directory = os.listdir(path)
except FileNotFoundError:
    print('The path \'/Users/adrian/Documents/github_pages/docs/assets/images\' used in the script cannot be found.')
    sys.exit()

for item in directory:
    if os.path.isdir(path + '/' + item):
        for file in os.listdir(path + '/' + item):
            if " " in file:
                print('file is ' + file)
                os.rename(os.path.join(path + '/' + item, file), os.path.join(path + '/' + item, file.replace(' - ', '')))
