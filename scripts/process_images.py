import os, glob
from PIL import Image

def find_banner_top(im):
    w, h = im.size
    for y in range(int(h * 0.45), h, 4):
        pixels = [im.getpixel((x, y)) for x in range(50, w - 50, 40)]
        dark_count = sum(1 for r, g, b in pixels if (r + g + b) / 3 < 18)
        if dark_count > len(pixels) * 0.85:
            return y
    return int(h * 0.68)

os.makedirs("public/images/products", exist_ok=True)
os.makedirs("public/images/fabrics", exist_ok=True)
os.makedirs("public/images/branding", exist_ok=True)

# 1. Process Sofás & Rinconeros
sofas_map = {
    4: "sofa-zaro-210",
    5: "sofa-zaro-210-puff",
    6: "sofa-zaro-250",
    7: "rinconero-zaro-3x2",
    8: "sofa-cama-1plaza",
    9: "sofa-cama-160",
    10: "sofa-cama-180",
    11: "sofa-cama-180-puff",
    12: "sofa-teddy-2x1",
    13: "sofa-barcelona-160-puff",
    14: "sofa-barcelona-180-puff",
    15: "sofa-barcelona-200-puff",
    16: "sofa-rocco-160",
    17: "sofa-rocco-180",
    18: "sofa-rocco-180-puff",
    19: "sofa-rocco-200",
    20: "sofa-rocco-200-puff",
    21: "rinconero-rocco-330",
    22: "sofa-catalina-210",
    23: "sofa-catalina-210-puff",
    24: "sofa-catalina-240",
    25: "sofa-paris-180",
    26: "sofa-paris-210",
    27: "rinconero-paris-250",
    28: "sofa-qatar-210",
    29: "sofa-qatar-210-puff",
    30: "sofa-modular-lupe-2x2",
    31: "sofa-modular-lupe-3x2",
    32: "sofa-s-2x160"
}

for page_num, slug in sofas_map.items():
    page_file = f"public/images/catalog_pages/sofas/page-{page_num:02d}.png"
    if os.path.exists(page_file):
        im = Image.open(page_file).convert("RGB")
        bt = find_banner_top(im)
        cropped = im.crop((0, 0, im.size[0], bt))
        cropped.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        out_path = f"public/images/products/{slug}.webp"
        cropped.save(out_path, "WEBP", quality=85)
        print(f"Saved {out_path} ({cropped.size})")

# 2. Process Individuales
indiv_map = {
    4: "individual-perla",
    5: "individual-jota",
    6: "sofa-cama-1plaza-indiv",
    7: "individual-nuba",
    8: "circular-bastones-1m",
    9: "individual-benetton"
}

for page_num, slug in indiv_map.items():
    page_file = f"public/images/catalog_pages/indiv/page-{page_num:02d}.png"
    if os.path.exists(page_file):
        im = Image.open(page_file).convert("RGB")
        bt = find_banner_top(im)
        cropped = im.crop((0, 0, im.size[0], bt))
        cropped.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        out_path = f"public/images/products/{slug}.webp"
        cropped.save(out_path, "WEBP", quality=85)
        print(f"Saved {out_path} ({cropped.size})")

# 3. Process Respaldos
respaldos_map = {
    4: "respaldo-liso-con-tachas",
    5: "respaldo-bastones-vert-horiz",
    6: "respaldo-liso",
    7: "respaldo-doble-fila-tachas",
    8: "respaldo-bastones-combinados"
}

for page_num, slug in respaldos_map.items():
    page_file = f"public/images/catalog_pages/respaldos/page-{page_num:02d}.png"
    if os.path.exists(page_file):
        im = Image.open(page_file).convert("RGB")
        bt = find_banner_top(im)
        cropped = im.crop((0, 0, im.size[0], bt))
        cropped.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        out_path = f"public/images/products/{slug}.webp"
        cropped.save(out_path, "WEBP", quality=85)
        print(f"Saved {out_path} ({cropped.size})")

# 4. Process Fabrics
fabric_pages = {
    "public/images/catalog_pages/sofas/page-35.png": "public/images/fabrics/pana-velvet.webp",
    "public/images/catalog_pages/sofas/page-36.png": "public/images/fabrics/floyd.webp",
    "public/images/catalog_pages/sofas/page-39.png": "public/images/fabrics/mercury.webp",
    "public/images/catalog_pages/sofas/page-40.png": "public/images/fabrics/cuerotex.webp",
}
for src, dest in fabric_pages.items():
    if os.path.exists(src):
        im = Image.open(src).convert("RGB")
        im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        im.save(dest, "WEBP", quality=85)
        print(f"Saved fabric sample {dest}")

# 5. Storefront & Brand Hero
cover_file = "public/images/catalog_pages/sofas/page-01.png"
if os.path.exists(cover_file):
    im = Image.open(cover_file).convert("RGB")
    # Left half is storefront with LUPE HOME sign
    storefront = im.crop((0, 0, int(im.size[0] * 0.5), im.size[1]))
    storefront.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
    storefront.save("public/images/branding/storefront.webp", "WEBP", quality=85)

    # Right half is cozy sofa texture
    sofa_detail = im.crop((int(im.size[0] * 0.5), 0, im.size[0], im.size[1]))
    sofa_detail.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
    sofa_detail.save("public/images/branding/sofa-detail.webp", "WEBP", quality=85)
    print("Saved storefront & sofa detail")
