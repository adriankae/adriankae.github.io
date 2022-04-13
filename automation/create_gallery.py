#!/usr/bin/env python3

import argparse

# Initialize parser
parser = argparse.ArgumentParser()
parser.add_argument("gallery_name", help="gallery_name is the name of the gallery you want to create and should also match the image folder name.")
parser.parse_args()
