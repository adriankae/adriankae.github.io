import os
join = os.path.join

path = '/Users/adrian/Documents/github_pages/docs/assets/images'
directory = os.listdir(path)

print('start loop')
for item in directory:
    print('item is: ' + item)
    if os.path.isdir(path + '/' + item):
        print('### found folder ###')
        print('folder is: ' + item)
        for file in os.listdir(path + '/' + item):
            print('file is ' + file)
            os.rename(os.path.join(path + '/' + item, file), os.path.join(path + '/' + item, file.replace(' - ', '')))
