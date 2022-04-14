#!/usr/bin/env python3

import os
import sys
import argparse

# os.system('/Users/adrian/Documents/github_pages/automation/conf.py')

from docs.conf import HEAD1, BODY1, BODY2

# Initialize parser
parser = argparse.ArgumentParser()
parser.add_argument("gallery_name", help="gallery_name is the name of the gallery you want to create and should also match the image folder name.")
args = parser.parse_args()

path = '/Users/adrian/Documents/github_pages/'
image_path = '/Users/adrian/Documents/github_pages/docs/assets/images/' + args.gallery_name
try:
    image_directory = os.listdir(image_path)
except FileNotFoundError:
    print('The path \'/Users/adrian/Documents/github_pages/docs/assets/images/' + args.gallery_name + '\' used in the script cannot be found.')
    sys.exit()


def format_check():
    # this function performs a format check on the argument given to the script
    if not args.gallery_name[0:7].isdigit() or args.gallery_name[8] != "_":
        print('The format of the gallery name is not correct. Make sure to enter it like YYYYMMDD_name_name.')
        sys.exit()

def get_gallery_name():
    name = args.gallery_name[9:].replace('_', ' ')
    return name

def get_gallery_date():
    date = args.gallery_name[6:8] + '.' + args.gallery_name[4:6] + '.' + args.gallery_name[0:4]
    return date

def get_number_of_pictures():
    count = 0
    for item in image_directory:
        count+=1
    return count

format_check()

try:
    with open(path + args.gallery_name + ".html", 'w') as f:
        try:
            f.write(HEAD1)
            f.write("\t<title>" + get_gallery_name().title() + " - " + get_gallery_date() + "</title>\n")
            f.write("</head>\n")
            f.write(BODY1)
            count = get_number_of_pictures()
            for i in range(count):
                f.write("\t\t\t\t<a href=\"https://adriankae.github.io/docs/assets/images/" + args.gallery_name + "/" + args.gallery_name + str(i) + ".jpeg\" data-lightbox=\"Heachenberg 25.02.2022\" data-title=\"\">\n")
                f.write("\t\t\t\t\t<img src=\"https://adriankae.github.io/docs/assets/images/" + args.gallery_name + "/" + args.gallery_name + str(i) + ".jpeg\">\n")
                f.write("\t\t\t\t</a>\n\n")
            f.write(BODY2)
        except NameError:
            print('Something probably went wrong while importing a variable.')
except FileExistsError:
    print('The file already exists. Please choose another file name.')

# add html link to touren.html

# with open(path + "touren.html", 'w')
