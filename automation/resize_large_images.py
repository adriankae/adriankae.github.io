#!/usr/bin/env python3

import os
import sys
from PIL import Image

join = os.path.join

path = '/Users/adrian/Documents/github_pages/docs/assets/images/'
max_file_size = 5000000
try:
    directory = os.listdir(path)
except FileNotFoundError:
    print('The path \'/Users/adrian/Documents/github_pages/docs/assets/images\' used in the script cannot be found.')
    sys.exit()

for item in directory:
    if os.path.isdir(path + '/' + item):
        for file in os.listdir(path + '/' + item):
            filename, file_extension = os.path.splitext(file)
            # if files are bigger as 5 MB (max_file_size) then resize to 30%
            if os.stat(path + '/' + item + '/' + file).st_size > max_file_size and file_extension == '.jpeg':
                new_image = Image.open(path + '/' + item + '/' + file)
                new_image = new_image.resize(tuple(round(0.3*x) for x in new_image.size))
                new_image.save(path + '/' + item + '/' + file)
                print('' + path + '/' + item + '/' + file + ' has been resized.')
