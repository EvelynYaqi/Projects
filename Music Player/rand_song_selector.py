import os
import random
import subprocess

def open_random_file(directory_path):
    try:
        # listing all files in the specified directory
        files = os.listdir(directory_path)
        # Making a list of all files as files
        files = [file for file in files if os.path.isfile(os.path.join(directory_path, file))]
        if len(files) == 0:
            return "No files in the directory."

        random_file = random.choice(files)
        random_file_path = os.path.join(directory_path, random_file)
        open_command = f"mpv '{random_file_path}'"
        subprocess.run(open_command, shell = True)
        return f"Open: {random_file}"
    except Exception as e:
        return f"Error: {str(e)}"
directory_path ="/home/lancelot/Projects/Music Player/Music" #put path of the music directory here
result = open_random_file(directory_path)
print(result)

