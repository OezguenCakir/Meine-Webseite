import argparse

from PIL import Image


def cut_transparent_borders(src):
    try:
        image = Image.open(src).convert("RGBA")
        pixel_data = image.load()
        width, height = image.size
        non_transparent_pixels = []
        for y in range(height):
            for x in range(width):
                if pixel_data[x, y][0] != 0:
                    non_transparent_pixels.append([x, y])
        non_transparent_x = []
        non_transparent_y = []
        for pixel_number in range(len(non_transparent_pixels)):
            non_transparent_x.append(non_transparent_pixels[pixel_number][0])
            non_transparent_y.append(non_transparent_pixels[pixel_number][1])
        top = min(non_transparent_y)
        right = max(non_transparent_x) + 1
        bottom = max(non_transparent_y) + 1
        left = min(non_transparent_x)
        cropped_image = image.crop((left, top, right, bottom))
        cropped_image.save(src)
    except FileNotFoundError:
        print("Datei wurde nicht gefunden :()")
    except Exception as e:
        print(f"Anderer Fehler ist aufgetreten: {e}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Cut off the transparent and empty borders of an image"
    )
    parser.add_argument("filename", type=str, help="name of the image file")
    args = parser.parse_args()
    cut_transparent_borders(args.filename)
