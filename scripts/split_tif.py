import os
import sys


def split_tif(file_path, out_dir):
    # Read the input file
    with open(file_path, 'rb') as file:
        data = file.read()

    # Calculate the number of chunks
    chunk_size = 90 * 1024 * 1024  # 90MB
    num_chunks = (len(data) + chunk_size - 1) // chunk_size

    # Split the file into chunks
    file_name = os.path.splitext(os.path.basename(file_path))[0]
    file_ext = os.path.splitext(file_path)[1]

    for i in range(num_chunks):
        start = i * chunk_size
        end = min(start + chunk_size, len(data))
        chunk_data = data[start:end]

        # Append chunk number to the file name
        chunk_file_name = f"{out_dir}/{file_name}_{i}{file_ext}"

        # Save the chunk as a new file
        with open(chunk_file_name, 'wb') as chunk_file:
            chunk_file.write(chunk_data)

        print(f"Split {chunk_file_name} created.")


# Check if the script is run from the command line
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python split_tif.py [file_path]")
        sys.exit(1)

    file_path = sys.argv[1]
    out_dir = sys.argv[2]
    split_tif(file_path, out_dir)
