<?php
// Vérifier si le formulaire a été soumis de manière sécurisée
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données soumises de manière sécurisée
    $nom = htmlspecialchars($_POST['nom'], ENT_QUOTES, 'UTF-8');
    $prenom = htmlspecialchars($_POST['prenom'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    // Vérifier si les données ont été correctement soumises
    if ($nom && $prenom && $email && $message) {
        // Adresse e-mail de destination
        $destinataire = "jerome.dautreme@live.fr";

        // Sujet de l'e-mail
        $sujet = "Nouveau message du formulaire";

        // Corps de l'e-mail
        $corps = "Nom: $nom\n";
        $corps .= "Prénom: $prenom\n";
        $corps .= "Adresse e-mail: $email\n";
        $corps .= "Message:\n$message";

        // En-têtes de l'e-mail
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Supprimer les nouvelles lignes supplémentaires du corps de l'e-mail
        $corps = str_replace("\r\n", "\n", $corps);

        // Supprimer les en-têtes potentiellement dangereux
        $headers = preg_replace('/[\r\n]+/', '', $headers);

        // Supprimer les caractères potentiellement dangereux du sujet
        $sujet = htmlspecialchars($sujet, ENT_QUOTES, 'UTF-8');

        // Envoyer l'e-mail
        $success = mail($destinataire, $sujet, $corps, $headers);

        if ($success) {
            // Succès de l'envoi de l'e-mail
            $response = array('success' => true, 'message' => 'Le formulaire a été soumis avec succès');
            echo json_encode($response);
        } else {
            // Échec de l'envoi de l'e-mail
            $response = array('success' => false, 'message' => 'Une erreur est survenue lors de l\'envoi du formulaire');
            echo json_encode($response);
        }
    } else {
        // Les données soumises sont incomplètes ou invalides
        $response = array('success' => false, 'message' => 'Les données soumises sont incomplètes ou invalides');
        echo json_encode($response);
    }
}
?>