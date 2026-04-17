from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

# 1. Initialisation automatique de Chrome
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
    # 2. On va sur la page des parfums
    print("Ouverture de la page...")
    driver.get("https://www.yves-rocher.fr/parfum/tous-les-parfums/c/11000")

    # 3. On attend 5 secondes que la page (et les prix) se charge
    time.sleep(5)

    # 4. On récupère tous les noms de produits (souvent dans des h3 ou h2)
    # Sur Yves Rocher, les titres sont souvent dans des balises h3
    produits = driver.find_elements(By.TAG_NAME, "h3")

    print(f"\n--- {len(produits)} produits trouvés ---\n")
    
    for p in produits:
        nom = p.text.strip()
        if nom: # On n'affiche que si le texte n'est pas vide
            print(f"Produit : {nom}")

finally:
    # 5. On attend un peu pour que tu puisses voir le résultat avant de fermer
    print("\nFin du scan. Fermeture du navigateur dans 10 secondes...")
    time.sleep(10)
    driver.quit()