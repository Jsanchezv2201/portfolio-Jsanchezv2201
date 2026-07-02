#!/usr/bin/env python3
"""
Script para convertir imágenes a WebP y optimizarlas.
Reduce tamaño significativamente manteniendo buena calidad.
"""

from PIL import Image
import os
from pathlib import Path

# Imágenes a convertir (prioridad: mayor tamaño primero)
IMAGES_TO_CONVERT = [
    # Screenshots y assets grandes
    ("public/assets/chatia-web-top.png", 80),
    ("public/assets/chatia-web.png", 80),
    ("public/vista-previa.png", 80),
    ("public/assets/projects/chatia-web.png", 80),
    ("public/assets/projects/dog-breed.jpg", 80),
    ("public/assets/projects/ros2-robot.jpg", 80),
    ("public/assets/projects/tcp-chat.jpg", 80),
    # Fotos de galería (calidad más baja para cargar rápido)
    ("public/assets/photography/photo_2026-02-25_13-10-53.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-54.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-55.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-55 (2).jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-57.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-58.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-10-59.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-00.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-00 (2).jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-01.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-02.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-03.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-03 (2).jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-04.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-05.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-11-05 (2).jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-39-45.jpg", 75),
    ("public/assets/photography/photo_2026-02-25_13-39-47.jpg", 75),
    ("public/assets/photography/photo_2026-04-19_17-31-47.jpg", 75),
    ("public/assets/photography/photo_2026-04-19_17-38-18.jpg", 75),
]

def convert_to_webp(source_path, quality=80):
    """Convierte imagen a WebP y retorna información"""
    source_path = Path(source_path)
    
    if not source_path.exists():
        return f"⚠️  {source_path} no existe"
    
    output_path = source_path.with_suffix(".webp")
    
    try:
        # Abrir y convertir
        img = Image.open(source_path)
        if img.mode in ("RGBA", "LA", "P"):
            img = img.convert("RGB")
        
        # Obtener tamaño original
        original_size = source_path.stat().st_size / 1024
        
        # Guardar como WebP
        img.save(output_path, "WEBP", quality=quality, method=6)
        
        # Obtener tamaño nuevo
        new_size = output_path.stat().st_size / 1024
        savings = original_size - new_size
        percent = (savings / original_size * 100) if original_size > 0 else 0
        
        return f"✅  {source_path.name} → {output_path.name}: {original_size:.0f}KB → {new_size:.0f}KB (ahorro: {savings:.0f}KB, {percent:.1f}%)"
    except Exception as e:
        return f"❌  Error en {source_path.name}: {e}"

def main():
    print("🚀 Iniciando conversión de imágenes a WebP...\n")
    
    total_original = 0
    total_new = 0
    
    for image_path, quality in IMAGES_TO_CONVERT:
        full_path = Path(image_path)
        if full_path.exists():
            result = convert_to_webp(image_path, quality)
            print(result)
            
            # Calcular ahorros
            if "→" in result and "KB" in result:
                try:
                    parts = result.split(":")[-1].split("→")
                    original = float(parts[0].split()[-2])
                    new = float(parts[1].split()[0])
                    total_original += original
                    total_new += new
                except:
                    pass
        else:
            print(f"⏭️  Saltando {image_path} (no existe)")
    
    if total_original > 0:
        total_savings = total_original - total_new
        percent_saved = (total_savings / total_original * 100)
        print(f"\n📊 TOTAL:")
        print(f"   Antes: {total_original:.0f}KB")
        print(f"   Después: {total_new:.0f}KB")
        print(f"   Ahorro: {total_savings:.0f}KB ({percent_saved:.1f}%)")

if __name__ == "__main__":
    main()
