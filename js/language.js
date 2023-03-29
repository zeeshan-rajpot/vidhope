var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['fr'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['about'] = 'About Us';
    arrLang['en']['contact'] = 'Contact Us';
    arrLang['en']['Download'] = 'Download';
    arrLang['en']['Features'] = 'Features';
    arrLang['en']['Company'] = 'Company';
    arrLang['en']['Security'] = 'Security';
    arrLang['en']['Download'] = 'Download';
    arrLang['en']['Press'] = 'Press';
    arrLang['en']['FAQ'] = 'FAQ';
    arrLang['en']['Contact us'] = 'Contact us';
    arrLang['en']['Help Center'] = 'Help Center';
    arrLang['en']['features'] = 'features';
    arrLang['en']['Blog'] = 'Blog';
    arrLang['en']['heading'] = 'Become a creator and monetize your contents or become a super fan and access exlusive contents of your favorite creator.';
    arrLang['en']['headingp'] = 'Videhope helps you create a deep connection with the artist,comedian,blogger, infulencer or creator you love by being a member of their private community.';
    arrLang['en']['boyp'] = 'Videhope is free to download app that was built to help african creators to monetize thier content (photos,videos, audios and livestream) via monthly subscription. Create your account and apply in one click to become a creatop. Videhope is also a social media where users can intract with each other and post publicly their content like any other social media.';
    arrLang['en']['girlp'] = 'Go live in one click to share your feeling or interact with yours super fans or become a super fan to access your creator livestream and be part of his community';
    arrLang['en']['headingp'] = 'Videhope helps you create a deep connection with the artist,comedian,blogger, infulencer or creator you love by being a member of their private community.';
    
    // fr content (french Language) 
    // Please change to your own language
    arrLang['fr']['home'] = 'Domicile';
    arrLang['fr']['about'] = 'Sur';
    arrLang['fr']['contact'] = 'Contactez';
    arrLang['fr']['Features'] = 'Fonctionnalités';
    arrLang['fr']['Download'] = 'Télécharger';
    arrLang['fr']['Company'] = ' Entreprise';
    arrLang['fr']['Security'] = 'Sécurité';
    arrLang['fr']['Download'] = 'Télécharger';
    arrLang['fr']['Press'] = 'Presse';
    arrLang['fr']['FAQ'] = 'FAQ';
    arrLang['fr']['Contact us'] = 'Contacte';
    arrLang['fr']['Help Center'] = 'Centre d’aide';
    arrLang['fr']['features'] = 'Fonctionnalités';
    arrLang['fr']['Blog'] = 'Blog';
    arrLang['fr']['heading'] = 'Devenez créateur et monétisez vos contenus ou devenez un super fan et accédez aux contenus exclusifs de votre créateur préféré.  Videhope vous aide à créer une connexion profonde avec l artiste, le comédien, le blogueur, l influenceur ou le créateur que vous aimez en étant membre de leur communauté privée.';
    arrLang['fr']['headingp'] = 'Videhope vous aide à créer une connexion profonde avec lartiste le comédien, le blogueur, l influenceur ou le créateur que vous aimez en étant membre de leur communauté privée.';
    arrLang['fr']['boyp'] = 'Devenez créateur et monétisez vos contenus ou devenez un super fan et accédez aux contenus exclusifs de votre créateur préféré.  Videhope vous aide à créer une connexion profonde avec l artiste, le comédien, le blogueur, l influenceur ou le créateur que vous aimez en étant membre de leur communauté privée.';
    arrLang['fr']['girlp'] = 'Passez en direct en un clic pour partager votre ressenti ou interagir avec vos super fans ou devenez un super fan pour accéder au livestream de votre créateur et faire partie de sa communauté';

    // Process translation
    $(function(){
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });