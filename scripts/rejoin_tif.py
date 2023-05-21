import os
import sys


def rejoin_tif(directory, out_path):
    # Get all the files in the directory
    files = [file for file in os.listdir(directory) if file.endswith('.tif')]

    # Sort the files to ensure correct ordering
    files.sort()

    # Read the data from each file and append to the final data
    final_data = b''
    for file in files:
        with open(os.path.join(directory, file), 'rb') as chunk_file:
            chunk_data = chunk_file.read()
            final_data += chunk_data

    # Save the rejoined file
    rejoined_file_path = os.path.join(out_path)
    with open(rejoined_file_path, 'wb') as rejoined_file:
        rejoined_file.write(final_data)

    print(f"Rejoined file saved as {rejoined_file_path}.")


# Check if the script is run from the command line
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python rejoin_tif.py [directory_path]")
        sys.exit(1)

    directory_path = sys.argv[1]
    out_name = sys.argv[2]
    rejoin_tif(directory_path, out_name)
