#!/usr/bin/env python3

import os
import argparse

# os.system('/Users/adrian/Documents/github_pages/automation/conf.py')

from docs.conf import HEAD1

# Initialize parser
parser = argparse.ArgumentParser()
parser.add_argument("gallery_name", help="gallery_name is the name of the gallery you want to create and should also match the image folder name.")
args = parser.parse_args()

path = '/Users/adrian/Documents/github_pages/'

try:
    with open(path + args.gallery_name + ".html", 'x') as f:
        try:
            f.write(HEAD1)
        except NameError:
            print('The variable HEAD1 is not defined. Something probably went wrong while importing this variable.')
except FileExistsError:
    print('The file already exists. Please choose another file name.')
