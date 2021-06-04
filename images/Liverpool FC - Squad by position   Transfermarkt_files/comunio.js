/**
 * Created by CDignas on 16.08.2017.
 */
$(function () {
    if (typeof document.referrer !== 'undefined' && document.referrer !== '') {
        var regex = /((http:\/\/||https:\/\/)?(?:www\.|m.|comduo.)?(comunio|comuniodesegunda|comunio-cl|comunioturkey|comduo)(?:\.\w[-\w]{0-61}\w|\w)*?)\.((com.tr|com|de|es|it|co.uk|pt|fr)(\/)?)/g;
        if (getCookie('_tmr1') != 1 && regex.test(document.referrer)) {
            var now = new Date();
            var time = now.getTime();
            var future = time + (365 * 24 * 3600 * 1000);
            now.setTime(future);
            var expires = now.toUTCString();
            document.cookie = "_tmr1=1; path=/; expires=" + expires + ';';
        }
    }
    if(getCookie('_tmr1') == 1 && getCookie('_tmr2') != 1) {
        try { 
            ga('send', 'event', 'layer', 'view', 'Managerspiel_Comunio_Ref');
        }
        catch(err){
            console.log('GA not defined');
        }
        var now = new Date();
        var time = now.getTime();
        var future = time + (24 * 3600 * 1000);
        now.setTime(future);
        var expires = now.toUTCString();
        document.cookie = "_tmr2=1; path=/; expires=" + expires + ';';
        $('<div id="managerspielModal" class="reveal" data-reveal>\n\
                <a class="close-reveal close-icon" aria-label="Close" data-close></a>\n\
                <div class="header"><a href="/managerspiel/startseite"><img src="/images/MA_Anzeige_Communio.jpg"></a></div>\n\
           </div>').insertAfter("#main");
        new Foundation.Reveal($('#managerspielModal')).open();
    }
});