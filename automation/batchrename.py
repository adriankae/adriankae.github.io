#!/usr/bin/env python3

import os
join = os.path.join

path = '/Users/adrian/Documents/github_pages/docs/assets/images'
directory = os.listdir(path)

for item in directory:
    if os.path.isdir(path + '/' + item):
        for file in os.listdir(path + '/' + item):
            if " " in file:
                print('file is ' + file)
                os.rename(os.path.join(path + '/' + item, file), os.path.join(path + '/' + item, file.replace(' - ', '')))
