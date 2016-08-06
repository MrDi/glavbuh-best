<?php defined('_JEXEC') or die; 

JHtml::_('bootstrap.framework');
JHtmlBootstrap::loadCss(false);

$doc = JFactory::getDocument();
$doc->addStyleSheet('/templates/lemon/css/bootstrap.min.css');


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <jdoc:include type="head" />
    <meta charset="utf-8">
    <link rel="stylesheet" href='/templates/lemon/css/fonts.css'>
    <link rel="stylesheet" href='/templates/lemon/css/bootstrap.min.css'>
    <link rel="stylesheet" href='/templates/lemon/css/hallooou.css'>
    <link rel="stylesheet" href='/templates/lemon/css/parallax.css'>
    <link rel="stylesheet" href='/templates/lemon/css/owl.carousel.css'>
    <link rel="stylesheet" href='/templates/lemon/css/owl.theme.css'>
    <link rel="stylesheet" href='/templates/lemon/css/owl.transitions.css'>
    <link rel="stylesheet" href='/templates/lemon/css/animate.css'>
    <link rel="stylesheet" href='/templates/lemon/css/magnific-popup.css'>
    <link rel="stylesheet" href='/templates/lemon/css/jquery.mb.YTPlayer.min.css'>
    <link rel="stylesheet" href='/templates/lemon/css/font-awesome.min.css'>
    <link rel="stylesheet" href='/templates/lemon/css/responsive.css'>
    <script src="/templates/lemon/js/jquery.min.js"></script>
    <script src="/templates/lemon/js/load.js"></script>
</head>
<body id="home" class="parallax-page">
   <div id="page-preloader" style="display: none;"><div class="loader" style="display: none;"></div></div>
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header pull-left">
                <a class="navbar-brand page-scroll" href="/">
                    <!-- replace with your brand logo/text -->
                    <span class="brand-logo"><img src="/templates/lemon/images/logo.png" onerror="this.src='/templates/lemon/images/logo.png'; this.onerror=null;" alt="Главбух" title="Главбух" class="img-responsive"></span>
                </a>
            </div>
            <div class="button_calc pull-center">
                <a class="calc" href="/calculator">
                   <span>Рассчитать стоимость</span>
                </a>
            </div>
          
            <div class="main-nav pull-right">
                <div class="button_container toggle">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
            </div>
            <div class="overlay" id="overlay">
                <nav class="overlay-menu">
                    <jdoc:include type="modules" name="pos-1" style="xhtml"/>   
                </nav>
            <div class="logo_menu"><img src="/templates/lemon/images/logo_full.png"  alt="Главбух" title="Главбух" class="img-responsive"></div>
            </div>
        </div>
    </nav>
            
 

    <jdoc:include type="modules" name="pos-2" style="xhtml"/>   
   
       
     <section>
         <jdoc:include type="modules" name="pos-4" style="xhtml"/>
     </section>
      
    <div class="main">
    		<div class="container">
                <jdoc:include type="message" />
                <jdoc:include type="component" />

              </div>
    </div>
  
<!-- Services Section -->
    <section>
       
            <jdoc:include type="modules" name="pos-5" style="xhtml"/>

    </section><!-- /.section -->
    
<!-- Counter Section -->
    <section >
            <jdoc:include type="modules" name="pos-6" style="xhtml"/>
    </section><!-- /.counter-section -->
    
 
 <!-- Counter Section -->
    <section >
            <jdoc:include type="modules" name="pos-7" style="xhtml"/>
    </section><!-- /.counter-section -->
    
    <section >
          
  <div>
      <jdoc:include type="modules" name="pos-8" style="xhtml"/>
  </div>
  <aside>
   <jdoc:include type="modules" name="pos-9" style="xhtml"/>
  </aside>
    </section><!-- /.counter-section -->

	
	 <footer>
     <div class="container"> 
       <div class="left"> <jdoc:include type="modules" name="footer-left" style="xhtml"/></div>
       <div class="right"> <jdoc:include type="modules" name="footer-right" style="xhtml"/></div>
       
     </div>
     <jdoc:include type="modules" name="footer" style="xhtml"/>
    </footer>
	 <!-- jQuery -->
    
<div id="modal" class="contact content-section no-bottom-pad hidden">
<div class="container">
<div class="row text-center">
<div class="col-md-12">
<h2>Связаться с нами</h2>
<!-- <h3 class="caption gray">Feel free to get in touch with us if you have a new project or simply something awesome</h3>--></div>
<!-- /.col-md-12 --></div>
<!-- /.row --></div>
<!-- /.container -->
<div class="container">
<div class="row form-container">
<div class="col-md-8 contact-form">
<h3>Заполните поля контактной формы</h3>
<form id="contactForm" class="ajax-form" action="php/contact.php" method="post">
<div class="form-group"><input id="name" class="form-control" name="name" required="" type="text" value="" placeholder="Имя..." /></div>
<div class="form-group"><input id="email" class="form-control" name="email" required="" type="email" value="" placeholder="Email..." /></div>
<div class="form-group"><input id="phone" class="form-control" name="phone" required="" type="phone" value="" placeholder="Контактный телефон..." /></div>
<div class="form-group"><textarea class="form-control" name="message" required="" rows="4" placeholder="Ваше сообщение"></textarea></div>
<div class="form-group"><button class="btn btn-default" name="submit" type="submit"><i class="fa fa-paper-plane fa-fw"></i> Отправить</button></div>
</form></div>
<!-- /.contact-form -->
<div class="col-md-4 contact-address">
<h3>Наш адрес</h3>
<p>г. Омск, 644043, ул. Фрунзе, 1 <br />к. 3 (ост. Рабиновича)</p>
<p><a href="mailto:glavbuh@glavbuh-best">glavbuh@glavbuh-best@.ru</a></p>
<p>тел./факс:<br /><span class="phone_contact">(3812) 90-50-83<br />33-70-03</span></p>
<div class="info_text tel-fax block">
<div class="tel"><span class="blue">тел./факс:<br /></span> <span class="blue">(3812)</span> 90-50-83</div>
<div class="fax"><span class="blue">(3812)</span> 33-70-05</div>
</div>
</div>
<!-- /.contact-address --></div>
<!-- /.row --></div>
<!-- /.container --></div>
   
    <div class="ok" style="display:none;">Ваша заявка получена!</div>
   
    <!-- Bootstrap Core JavaScript -->
    <script src="/templates/lemon/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="/templates/lemon/js/plugins/wow.min.js"></script>
    <script src="/templates/lemon/js/plugins/owl.carousel.min.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.parallax-1.1.3.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.magnific-popup.min.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.mb.YTPlayer.min.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.countTo.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.inview.min.js"></script>
    <script src="/templates/lemon/js/plugins/pace.min.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.easing.min.js"></script>
    <script src="/templates/lemon/js/plugins/jquery.validate.min.js"></script>
    <script src="/templates/lemon/js/plugins/additional-methods.min.js"></script> 
    <script src="http://www.xiper.net/examples/js-plugins/gallery/lightbox/js/jquery.lightbox-0.5.js"></script>

    <!-- Custom JavaScript -->
    <script src="/templates/lemon/js/hallooou.js"></script>
    <script src="/templates/lemon/js/validate.js"></script>
</body>
</html>