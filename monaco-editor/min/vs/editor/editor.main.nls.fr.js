/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.0(3397234a858a6eced8f36cef8a16c75c32aab619)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.fr",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (s'est reproduit)"],"vs/base/browser/ui/findinput/findInput":["Utiliser une expression régulière","Mot entier","Respecter la casse","entrée"],"vs/base/browser/ui/inputbox/inputBox":["Erreur : {0}","Avertissement : {0}","Information : {0}"],"vs/base/common/json":["Symbole non valide","Format de nombre non valide","Nom de propriété attendu","Valeur attendue","Signe des deux points attendu","Virgule attendue","Accolade fermante attendue","Crochet fermant attendu","Fin de fichier attendue"],"vs/base/common/keybinding":["Windows","Contrôle","Maj","Alt","Commande","Windows","Ctrl","Maj","Alt","Commande","Windows"],"vs/base/common/severity":["Erreur","Avertissement","Informations"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, sélecteur","sélecteur"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Sélecteur rapide. Tapez pour réduire les résultats.","Sélecteur rapide"],"vs/base/parts/tree/browser/treeDefaults":["Réduire"],"vs/editor/common/config/commonEditorConfig":["Éditeur","Contrôle la famille de polices.","Contrôle l'épaisseur de police.","Contrôle la taille de police en pixels.","Contrôle la hauteur de ligne. Utilisez 0 pour calculer lineHeight à partir de fontSize.","Contrôle l'affichage des numéros de ligne. Les valeurs possibles sont 'activé', 'désactivé' et 'relatif'. La valeur 'relatif' indique le numéro de ligne à partir de la position actuelle du curseur.","Colonnes où afficher les règles verticales","Caractères utilisés comme séparateurs de mots durant la navigation ou les opérations basées sur les mots","Nombre d'espaces correspondant à une tabulation. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'number' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Des espaces sont insérés quand vous appuyez sur la touche Tab. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'boolean' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Quand vous ouvrez un fichier, 'editor.tabSize' et 'editor.insertSpaces' sont détectés en fonction du contenu du fichier.","Contrôle si les sélections ont des angles arrondis","Contrôle si l'éditeur défile au-delà de la dernière ligne","Contrôle le nombre de caractères après lesquels l'éditeur effectue un retour automatique à la ligne suivante. Si vous affectez la valeur 0, le retour automatique à la ligne s'effectue en fonction de la largeur de la fenêtre d'affichage (retour automatique à la ligne). Si vous affectez la valeur -1, l'éditeur n'effectue jamais de retour automatique à la ligne.","Contrôle le retour automatique à la ligne. Le retour automatique à la ligne s'effectue à min(editor.wrappingColumn, viewportWidthInColumns).","Contrôle le retrait des lignes renvoyées. La valeur peut être 'none', 'same' ou 'indent'.","Multiplicateur à utiliser pour le 'deltaX' et le 'deltaY' des événements de défilement de la roulette de la souris","Contrôle si les suggestions rapides doivent s'afficher ou non pendant la saisie","Contrôle le délai en ms au bout duquel les suggestions rapides s'affichent","Active les indicateurs de paramètres","Contrôle si l'éditeur doit automatiquement fermer les crochets après les avoir ouverts","Contrôle si l'éditeur doit automatiquement mettre en forme la ligne après la saisie","Contrôle si les suggestions doivent s'afficher automatiquement durant la saisie de caractères de déclenchement","Contrôle si les suggestions peuvent être acceptées avec Entrée (en plus de Tab). Cela permet d'éviter toute ambiguïté entre l'insertion de nouvelles lignes et l'acceptation de suggestions.","Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (';') can be a commit character that accepts a suggestion and types that character.","Contrôle si les extraits de code s'affichent en même temps que d'autres suggestions, ainsi que leur mode de tri.","Contrôle si la copie sans sélection permet de copier la ligne actuelle.","Activez les suggestions basées sur les mots.","Taille de police du widget de suggestion","Hauteur de ligne du widget de suggestion","Insérez les extraits de code quand leurs préfixes correspondent. Fonctionne mieux quand la fonctionnalité 'quickSuggestions' n'est pas activée.","Détermine si l'éditeur doit surligner les correspondances similaires à la sélection","Contrôle le nombre d'ornements pouvant s'afficher à la même position dans la règle d'aperçu","Contrôle le style d'animation du curseur. Valeurs possibles : 'blink', 'smooth', 'phase', 'expand' et 'solid'","Agrandir ou réduire la police de l'éditeur quand l'utilisateur fait tourner la roulette de la souris tout en maintenant la touche Ctrl enfoncée","Contrôle le style du curseur. Valeurs acceptées : 'block', 'line' et 'underline'","Active les ligatures de police","Contrôle si le curseur doit être masqué dans la règle d'aperçu.","Contrôle la façon dont l'éditeur affiche les espaces blancs. Il existe trois options possibles : 'none', 'boundary' et 'all'. L'option 'boundary' n'affiche pas les espaces uniques qui séparent les mots.","Contrôle si l'éditeur doit afficher les caractères de contrôle","Contrôle si l'éditeur doit afficher les repères de mise en retrait","Contrôle la façon dont l'éditeur doit afficher la surbrillance de la ligne active. Les différentes possibilités sont 'none', 'gutter', 'line' et 'all'.","Contrôle si l'éditeur affiche les indicateurs CodeLens","Contrôle si le pliage de code est activé dans l'éditeur","Contrôle si l'éditeur doit afficher la marge de glyphes verticale. La marge de glyphes sert principalement au débogage.","L'insertion et la suppression d'un espace blanc suit les taquets de tabulation","Supprimer l'espace blanc de fin inséré automatiquement","Garder les éditeurs d'aperçu ouverts même si l'utilisateur double-clique sur son contenu ou appuie sur la touche Échap.","Contrôle si l'éditeur de différences affiche les différences en mode côte à côte ou inline","Contrôle si l'éditeur de différences affiche les changements liés aux espaces blancs de début ou de fin comme des différences","Contrôle si l'éditeur de différences affiche les indicateurs +/- pour les modifications ajoutées/supprimées","Contrôle si le presse-papiers primaire Linux doit être pris en charge."],"vs/editor/common/config/defaultConfig":["Contenu d'éditeur"],"vs/editor/common/controller/cursor":["Exception inattendue pendant l'exécution de la commande."],"vs/editor/common/model/textModelWithTokens":["Le mode a échoué lors de la création de jetons de l’entrée."],"vs/editor/common/modes/modesRegistry":["Texte brut"],"vs/editor/common/modes/snippetsRegistry":["{0}, {1}"],"vs/editor/common/services/bulkEdit":["Ces fichiers ont changé pendant ce temps : {0}"],"vs/editor/common/services/modeServiceImpl":["Ajoute des déclarations de langage.","ID du langage.","Alias de nom du langage.","Extensions de fichier associées au langage.","Noms de fichiers associés au langage.","Modèles Glob de noms de fichiers associés au langage.","Types MIME associés au langue.","Expression régulière correspondant à la première ligne d'un fichier du langage.","Chemin relatif d'un fichier contenant les options de configuration du langage."],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Go to Bracket"],"vs/editor/contrib/caretOperations/common/caretOperations":["Move Caret Left","Move Caret Right"],"vs/editor/contrib/clipboard/browser/clipboard":["Couper","Copier","Coller"],"vs/editor/contrib/comment/common/comment":["Activer/désactiver le commentaire de ligne","Ajouter le commentaire de ligne","Supprimer le commentaire de ligne","Activer/désactiver le commentaire de bloc"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Afficher le menu contextuel de l'éditeur"],"vs/editor/contrib/find/browser/findWidget":["Rechercher","Rechercher","Correspondance précédente","Correspondance suivante","Rechercher dans la sélection","Fermer","Remplacer","Remplacer","Remplacer","Tout remplacer","Changer le mode de remplacement","Seuls les 999 premiers résultats sont mis en surbrillance. Cependant, toutes les opérations de recherche sont appliquées à l'ensemble du texte.","{0} sur {1}","Aucun résultat"],"vs/editor/contrib/find/common/findController":["Rechercher","Rechercher suivant","Rechercher précédent","Sélection suivante","Sélection précédente","Remplacer","Ajouter la sélection à la correspondance de recherche suivante","Ajouter la sélection à la correspondance de recherche précédente","Déplacer la dernière sélection vers la correspondance de recherche suivante","Déplacer la dernière sélection à la correspondance de recherche précédente","Sélectionner toutes les occurrences des correspondances de la recherche","Modifier toutes les occurrences"],"vs/editor/contrib/folding/browser/folding":["Déplier","Déplier de manière récursive","Plier","Plier de manière récursive","Plier tout","Déplier tout","Fold Level {0}"],"vs/editor/contrib/format/common/formatActions":["Mettre en forme le document","Mettre en forme la sélection"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – {0} définitions","Atteindre la définition","Ouvrir la définition sur le côté","Apercu de définition","Go to Implementation","Peek Implementation","Cliquez pour afficher {0} définitions."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","Accéder à l'erreur ou l'avertissement suivant","Accéder à l'erreur ou l'avertissement précédent"],"vs/editor/contrib/hover/browser/hover":["Afficher par pointage"],"vs/editor/contrib/hover/browser/modesContentHover":["Chargement..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Remplacer par la valeur précédente","Remplacer par la valeur suivante"],"vs/editor/contrib/inspectTokens/browser/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/contrib/linesOperations/common/linesOperations":["Copier la ligne en haut","Copier la ligne en bas","Déplacer la ligne vers le haut","Déplacer la ligne vers le bas","Trier les lignes dans l'ordre croissant","Trier les lignes dans l'ordre décroissant","Découper l'espace blanc de fin","Supprimer la ligne","Mettre en retrait la ligne","Ajouter un retrait négatif à la ligne","Insérer une ligne au-dessus","Insérer une ligne sous","Supprimer tout ce qui est à gauche","Delete All Right","Joindre les lignes","Transposer les caractères autour du curseur","Transformer en majuscule","Transformer en minuscule"],"vs/editor/contrib/links/browser/links":["Cmd + clic pour suivre le lien","Ctrl + clic pour suivre le lien","Échec de l'ouverture de ce lien, car il n'est pas bien formé : {0}","Échec de l'ouverture de ce lien, car sa cible est manquante.","Ouvrir le lien"],"vs/editor/contrib/multicursor/common/multicursor":["Ajouter un curseur au-dessus","Ajouter un curseur en dessous","Créer plusieurs curseurs à partir des lignes sélectionnées"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Indicateurs des paramètres Trigger"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, conseil"],"vs/editor/contrib/quickFix/browser/quickFix":["Afficher les correctifs ({0})","Afficher les correctifs","Correctif rapide"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Atteindre la ligne {0} et la colonne {1}","Atteindre la ligne {0}","Tapez un numéro de ligne à atteindre entre 1 et {0}","Tapez un numéro de colonne à atteindre entre 1 et {0}","Go to line {0}","Tapez un numéro de ligne, suivi par un signe deux-points facultatif et un numéro de colonne à atteindre","Atteindre la ligne..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Tapez le nom de l'action que vous voulez exécuter","Palette de commandes"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Tapez le nom de l'identificateur auquel vous voulez accéder","Atteindre le symbole...","symboles ({0})","modules ({0})","classes ({0})","interfaces ({0})","méthodes ({0})","fonctions ({0})","propriétés ({0})","variables ({0})","variables ({0})","constructeurs ({0})","appels ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} références","Rechercher toutes les références"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Chargement en cours..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Échec de la résolution du fichier.","{0} références","{0} référence","aperçu non disponible","Références","Aucun résultat","Références"],"vs/editor/contrib/rename/browser/rename":["Échec de l'exécution du renommage.","Renommer le symbole"],"vs/editor/contrib/rename/browser/renameInputField":["Renommez l'entrée. Tapez le nouveau nom et appuyez sur Entrée pour valider."],"vs/editor/contrib/rename/common/rename":["Aucun résultat."],"vs/editor/contrib/smartSelect/common/smartSelect":["Développer la sélection","Réduire la sélection"],"vs/editor/contrib/suggest/browser/suggestController":["Suggestions pour Trigger"],"vs/editor/contrib/suggest/browser/suggestWidget":["En savoir plus...{0}","{0}, suggestion, avec détails","{0}, suggestion","Précédent","Chargement en cours...","Pas de suggestions.","{0}, accepté","{0}, suggestion, avec détails","{0}, suggestion"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Toggle Tab Key Moves Focus"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Fermer"],"vs/platform/configuration/common/configurationRegistry":['Configure settings to be overridden for language modes. To override, use the language id, or language ids separated by \',\' as the key to group settings. Example:\n"settings.overrides" = {\n\t\t"markdown" = {\n\t\t\t"editor.wrappingColumn": 0\n\t\t},\n\t\t"css,scss" = {\n\t\t\t"editor.formatOnSave": true\n\t\t}\n}\n',"Override Settings","Ajoute des paramètres de configuration.","Résumé des paramètres. Cette étiquette va être utilisée dans le fichier de paramètres en tant que commentaire de séparation.","Description des propriétés de configuration.","s'il est défini, 'configuration.type' doit avoir la valeur 'object","'configuration.title' doit être une chaîne","'configuration.properties' doit être un objet"],"vs/platform/extensions/common/extensionsRegistry":["Pour les extensions VS Code, spécifie la version de VS Code avec laquelle l'extension est compatible. Ne peut pas être *. Exemple : ^0.10.5 indique une compatibilité avec la version minimale 0.10.5 de VS Code.","Éditeur de l'extension VS Code.","Nom d'affichage de l'extension utilisée dans la galerie VS Code.","Catégories utilisées par la galerie VS Code pour catégoriser l'extension.","Bannière utilisée dans le marketplace VS Code.","Couleur de la bannière de l'en-tête de page du marketplace VS Code.","Thème de couleur de la police utilisée dans la bannière.","Toutes les contributions de l'extension VS Code représentées par ce package.","Définit l'extension à marquer en tant que préversion dans Marketplace.","Événements d'activation pour l'extension VS Code.","Ensemble de badges à afficher dans la barre latérale de la page d'extensions de Marketplace.","URL de l'image du badge.","Lien du badge.","Description du badge.","Dépendances envers d'autres extensions. L'identificateur d'une extension est toujours ${publisher}.${name}. Exemple : vscode.csharp.","Le script exécuté avant le package est publié en tant qu'extension VS Code.","Chemin d'une icône de 128 x 128 pixels."],"vs/platform/keybinding/common/abstractKeybindingService":["Voici d'autres commandes disponibles : ","Touche ({0}) utilisée. En attente de la seconde touche pour la pression simultanée...","La combinaison de touches ({0}, {1}) n'est pas une commande."],"vs/platform/message/common/message":["Fermer","Plus tard","Annuler"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.fr.js.map