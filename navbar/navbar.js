let navbar = () => {
      return `
    
    <div id="navupper">
    <div id ="navshow">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <h6>Nykaa's Summer Super Saver Day is Live -Shop Now</h6>
                  </div>
                  <div class="carousel-item">
                    <h6>Nykaa's Summer Super Saver Day is Live -Shop Now</h6>
                  </div>
                  <div class="carousel-item">
                    <h6>Nykaa's Summer Super Saver Day is Live -Shop Now</h6>
                  </div>
                </div>
        
            </div>

    </div>
    <div id="navservice">
        <div class="navabc">
            <div><i class="fa fa-mobile" aria-hidden="true"></i></div>
            <div>Get App  </div>
            </div>
            <div>|</div>
        <div class="navabc">
            <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div>Store & Events </div>
        </div>
        <div>|</div>
        <div class="navabc">
            <div><i class="fa fa-gift" aria-hidden="true"></i></div>
            <div>Gift Card </div>

        </div>
        <div>|</div>
        <div  class="navabc">
            <div><i class="fa-regular fa-circle-question"></i></div>
            <div>Help</div>
        </div>

    </div>
</div>
<div id="navmiddle">

    <div id="navcategories">
    
         <img id = "index" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYgAAACACAMAAAAmuQ7NAAAAkFBMVEX////8J3n8AG/8AG38IXf8AHD8HHX8FXP/8fb/+vz+z97/6vH/7fP//f78O4P/9Pj+ydr9nLv+3+n+u9D9jbL9mLn+ssr9eaX/5e7+w9b9hKz9bZ78S4v8Ln39lrj+rsj+1uP9YZf+ts39daP8VZD8QIX+p8P9d6T8XJT9bp/9j7P+o8D+v9T9hq3+0+D/4esbpYCeAAAZqklEQVR4nM1daUPiTLMlO7g76rgACow6bqP//99dEkjSVedUd0fwuW991CR0urq2U0tGo/+Ejr7OLlar1e3NT/3A+Pb87s/07up2EnX55GaxuDkNXHT8nYWcHt4cfuvG/4JWJ2laVGsq0mQl/rN4e5yXJ9Pfge37uFsur98X1r+PH57Wzy/zvKzS4j64nK/7pyItijSdjq1LDt+XyXq9+ezfWfBxPS3ep8n6sWnxMuSu/45e0zxpKc8cTnzN0irPk7wsqpV9++hgnm42ObmiDHsui/4HkmLpX83Z4/pHN5eWxQW95PiuvSQv0+R36P02NL6fp1XZvuV13E17ofHZ2WeMFE6LxKH8pfvHgcOgzObEQ9ZellflAv59NBPPXz/KdxzPnpwfXV97Sa45OqncBad/w+84Gr0VlfvglD34R+hwmq7lO6ue/gX0/nMqtqnsDuypu/K8tFh6kbm7kujLfpWl5ENSXZlrOVoKNtQb9g/frNTXnPvfcKR517D4V/CmvdBH2kph5T2BoyPJh6R6bv9zLdaeGgu/ycTt6YH6d6V2ba2bHqy1PKSaaUR+JnN8YsgDOMzhnvK/UU4rZ3vy3HflH/XuVftSv9QOG4x4kq9YfIj/HuOuJalhgifLFK5dr36mLpshs4pb/26cIh/Wy/Dfsx86EJuYekRCbbejN2Zy8RU/dQ/KACiJWOKuVW98JZ85XltTKS+70zomcaWY0wt7crrw37QPOpVatPJ4jHqnyna/V8p0cIs40UetEM7/M57x/Ikv5Fxbh/aHpZN1waSm8hsJek9SRXpbu5Da3XJqXrnQFqJ9pWMlzSk3+X/U+ZTb9ovsQPrFnnM8LfDSmvLq0L3uhu+pz7kejRLKYt/x3BPdqtXmJ+alL2qNnW/0JnfYEIgDvS9CCzIDUVCX6Qacmu6BQtURQ9081OuOaO3pf6V9EpyAwroSBOJ9+49D9Q9DIPS+SJb/xd3limlVcLWU5EXQ5HhWZyyyZUQgsNyd3uEEZNalyiAnVSsQU6Xc+Om51Duduj7TB1EjGVNM1xleuPnZXF7+RhXT+qCZUMgI9UNL+aPnpn3QBM9havjZWrN0AnGgtiajR057XNLVHBONUBCremirpaVc94fFsMq3H4+WtBlew97onDDCiIq1QHQWQv3DsPZP+hWzT+e/j6hGICYY1S6NsVFlpQK/X4Y999lAclp68ty1BzpmsQtnhD73nUBofy9bsNtBBQqt+0y2jXhM14biSIrZkbxywp2fNeU+ba8DVucXPHftgd6JoBs2QgtE3vJLvTI7yGjPpc3E/67//66fcfNkqKU8A+eSSNiWyjt7O44sMVrvys+mJdixKemVZ5aF0IdZwRZbgnC1cvdDMzlh/DS9pTI50Nfe2TvqiwjeLAO0PhdH9m27E9MIhg41BULtcE6V6QqOfOUE1VQxHapH/LHUUjoF72Jlq3pfjHxsipEVWu6L2BHjOlS7dYUlEBTJOYWTVjiXMcVUqMfczC21VGCgvPDwIUltzM8I5ja3LQJ7uQs9s5fjiK/yefpzrwMgCve96qMmxI64jFoxrSxvKdVWek1jnYKQd9ipBedd8j/qGQWovz0SlUSaidHhVto6i1pSKpbL0vZF5g3YOVSK6a8VZtEsD4G+3Ueb8ZyzzPL6Uj2Em779EBUIjomdKIGYt//Q0QGo9prAlXRdV+apSMVkYkvVEzvdGlrUv23mhRzJTD//6czLD8KvXICZDF7oPEKbptcxRPmH/M4/2BmXXQT+LwWecGF4SzlNUY/eLaO+vWvObqrpy02PjbREhLIYOxAXCIqJaYF4Mv5Bc7toOl0PksH/hStWd4blrZJP+KkRxJ3lXN3Gw5zmh/qtXytYjYwFshg7EAuqm1/ESq2VFohWw/9W/6DohmaW8HAJ1pWkzuEbz/hxsUpcjuTlxTkAM0xmazp1TsTaoAMjjFTh7sSC6uYV8VIzdtbKnwnEOdgANw0x9SumA6wm2FyTG0kFabOq14kWOHNDHdSt9ul0bOcLyHciSyCI6P7WLlNrRXQMwQTiBvjgWmqGOhe9Q3pvqKXs1bC4r2L71ht6oH/e1PWO71qjBleaEa9x+zqYLIEgoqtChb6oDPBUEn0i6ONsNIPmOs94dPrC7W5ZWa6kMtRrnwBe06rh+CjEfQBLe7HCHcgSCBIIgEC0RhIEghwafbPMMhBPs1dMn4mRYXuxIoFP+WPZB4FTU2riBYTTJIEeNCN+KDOkJa8jFF1tIUyBIP4WYhtuTE0VU7vLVxk9K3lq+pG6HKUu+wNPIePgnZsGLuqQ4T9iBHNWtqvQoqvPfZduiBEItMVOtmJCoIh0GzeNZ1wtFU92xllG1GVt7PAgGPHcX+fepsjnQ73dD6XoTIFAcMsUCK3fCYhziyGE43yQLExryI1MXJ55nMhLuXVVLVq63sHClt1M7cblAEb4EnvfpokNM2rc3RQIjWwT2T1GW+wcyDPiEjW7N5q8cnGoThbwGx0ppm/QrN/6wBkaxj2Ym5oGVJuxmzuEbIHQ8Zw26r1AaO2bYncCFjw6FxEuJWmDc53xcsrcWxyvI7mN6GjEyKomdi/b5OIRqPyBFB1qzv5tFRSjvbhOIGChWIkPeiEp+3YKVpbaKKbJH66WUorwdSQNRBsNQeqPIxUudLBlFQYgP8AIT0ZQ2aRj03eAqj8sZgKPxQ0hPoliqj2mD+iQ2DxeZ4oUKWCx9b0wIUXrLd2VbsNVOEU/wIhTTyLKaQGqSQtE54VDWSni9XjkC6ceALlUK6YjWmy/NtJ2g1xD2kDcGqtMChZGiPhjC/FAJa5V7rUDQcmdQxJSOTUNMpbt6Z1CW+xK2z1RTNPROek9qXdvHkiPqfK0zjW7xTJGFka4tZltQAv522zvjGBFdf06RI2DziT0Yak391kTsUOOf8vqtOcfPAFUFlBYo0magp7hWD7HSlREG1Prvo/1Odo/IzwWQgXWulGrFwg4akqlMYypchrcSP1MMqdIa569+rXSCA1El86AeJJmI5xERO+sgP7eOyM8LlP9Eq4TqrV8H+xBobXGCtFAuJ2LiECZ63kysCGHlBJMe3sMj2P4sNiQzqv6eUYQ7ey+uIPzax3W49cT1P8yULrHnXbqBWyARVGlK1oZjeXTqv5InHpzgy0JgLbDyyb6qO2bEZ6gulnIor9UG+Q+7aNz2Ikqdr9EPrhn8TqOEXl2HfPyKoJwAiEMZFgJgBtY9qoL2sz2zQhPUF2Tg3Bo4XS20oMSrelGN63X5LTLeeu/nDtmUc3NCmJyk4QaQaXeq4BqHAnUyW5anyJpcnQTXZgZEAi3CVkbdaftgTGzmjU+5uTgD8Ov3XZpKNBnBHX2BmkD4Tobd4j94m6K1ThyrSvnvIyYLB7uZkWWpmk2e46K/Eg/hKCupBVY5qA0rO2wLn6snmbzqmChgOut+Aobu+uzP6FpMxtSrofssMISQiyuF+037u2ApVnyeXj7NqvSqsX082IeMbXHV2bbPKXXsFqHZf1hQZFvb2e94s1b9ElUv9e2oSoUwXUkveQ8F+wDjpOkgoBqXHggghHHN7dX03laKL/bLp3qidVdi2d0J1ejTG4KFUU+QO7NYUvth1kFnasktajtwKgRc1dfQrO5wKVmhCy8myx+Xz7mzTgjfAEOaAkyeib7Pei8UJ11d70iq9HMfOq8f0Gu1lyq5osIFjSkkMNKzkRBgAPreq8FAO7r2egYcXrw/PepSCkLts8J9gLrSjF8RHdkdJG3e0hD7NSUOelXFlPLi+MLiFQRiFY8aA+hrlcCGaKwQC+0RmUPb8+n84yLgWchSKToTlJ3JrRFdQVCa60QuSaQD1hwri0HlL+r+F53s2LCHPLAIrqVeBl05kxfCkMVAYWMBCRz8qkeZtLmhNWhFwIxlBEuMGtZ8y0VL3HOUkNqdkeq/V1E2qH/SpZ9iKQRiG5g6YICKwfdnp6dyD+0EIBOSFdu3DyQES546sdXeLuDRV/WDK8taQw/Qe9VyqcMMoI61Ef+lbOSBm0Ktjtx4hGIgTbCFXgvAp/kZRjgc0iuMc81BPEJjADdLTZbwGWTX1Fhp0X+lUMDVfV+rDvgNozQmlyJ9HLIGt1BJXYbc1Lbq0GNm8oNxjFTGO1oiFh6cC3wvPaKrtde0Q58sEv/G4JUR5KdjvloOHUadCW0VTfLyHXdEYRziWYxTbr1eq41QQUHeK/Cd61HQxydvb+ehL2i4Dv74yBICK21qvbqNwCP7pjT+UVkqU1VbPwRE486S5Avw8q/UMmrQEui8fnTNN+dBw0FRjEiFHk7OtOqqWGEFgioBbqMgIs25IJwbABNT8OKS1UCkJTdkjJrVYCsXHRjON1gKnEOgiDd3dPIok4sNHi99nLJtJnHSE6Ik+q38YMk4koukdXakLR4ISV7J3PM36Ee3rwMRELws7UrBEDGBV5J+7HusqjzkzmLCuFcRbytVsamZMKki1cTPSAISsh2oTULirQ6WZ4fhPJHMMetgRN1Eq5mhBYI3nP/uSzWCrUeLl1WVT1BuyClMC4Pg9FHBFTWPkqHm6y8AEMWRzy/Vncn++JDXrNgvry/+BWVw9OVeRsfS6MANSP0kAFdn9HS+OP+erlcXt9drW4XR+Px4hVe3Y2pvcUjNcVPa1P9LaTqdsR87M2xOD07X+ZpsQ+jnK+PYJEsL1eLeDwAQc9mJgVAjBc4ZCAe/NHaz8UMtKNMKDYrrGaTGd1t+Pzy383Dde2d7s6D2hhkVc2CYK2PIqzwaWyjtp9rRuiean9wIkjFa8L8XodtSmRyVIXnGFI3xAYalD7sOpJqY5Dly3+/B0iBQ+hCNKEbZMuKW+iYGzCDQkmEOwfmBkMPANEiea48V2OYOZbV70w1C5LHfw+fQ6XAob8YZdbnSJfyJdW7Kl4Y4lSqOM+twSejP9MDXScRN5NezaSrjPRFKDk/nMrXnVjQEGz4FhIgmIPWVXHqgr27G2RhBc1as2OoH5ETUsbOPCikk35HGmAsTcKxJBvIF5OJmswPQRCSTBRHldRTHLL6r7C5ViYsowDV5PN5Z1sAf/FNr48kLD3cOvirkPx6PqMBpBADd1NRYTcSiT8XlD91pIhiulndzdJiB8VUe0Rp9QJ/3wMj0IXfoi5BRZoNcA3kIRKoA+bKmlY9wEeDrZtq9oxSTON1iODN6geocUrz5eXv2ikFQGb30VlY3ddmSHwtKzUNmQQi66DEFmGp7CYTiKmbwKmDqfy92v76fYcVRvFUh8fF491D75T+ACMwfdCiCSHnng+XpqT8drGjiPZtu3zh72YYvyEVUlcbWHh8dvWyY4iQP95fqEEisOjdZ5iRfdj+J5BqGzIiXnopAtPGGst2aCweBO9Uzw/0mBrQaPdYmcw5RkYMcCApYet2Z4IDQPAAh01hiqI+ET2QdiYUem2+ryqN9YjZ5TTZQ6yc8BOHjNh1hhm6jh0W51/ekPETctliOxH+7vrDSMdKYbsHEBQOKXBxFlfBkECmdZARAzxIRgj39Tn0QK9ENC6tN1uUo+Fu9R2FGHZVZudifL+XRRucaHp+oM9mRiJmZMSOXwUkenix/Zev4ToxhktT0u21bq6QFD72e01qQPlocoYODKQqm0/fz+ot17UrFOQCRuw4TA5LifqfPfQyYoBO1LCrE45DL5qI1gk4zrMLOxZ81a/z3B17mBrMpBAZsdswOTyQvT/85S9viUa4VFG2qH3ERJnQtWjADAw2lGgNkqN+tJKgrhrWCftd6xAh2NyHWt6s7YCvQkrnS4THpC1FzL8hw2cpBssGuQ8jZ3qnHjBCgUNkxE6js7D62tE4JL8e2A9K6rCKDAYKhFS1h5inoCdgiGLKKxJXOJGNBhtLLE5jvzis8EoTRgppfyBhrBRfeIB0xsw9OMQdUCVIJJQhGOx5pEDUSEX6ePmBfHPYq5vSeLhEct47zKfBYTzuefOVToY+rdqTckHFayH+rmMngjvifEe/MdtQgxa9vG2QCu9DIbVONxjrdGmxyPc2KZEaxze3Kdp31YCoa9IQf4fjR3QTYrABBKBGTauXt49O1kh/WH+wjtQvGl8Jw9LZiE5rizBTLHwSD+YX77sqN0+AGygQuMlE+2tm2Qcmr+Ugf/z3/ClONXEBes9IK2Sjngp/dIdveWD7p/DSPenENDYRoVLI4niRKAGRM9IrrM4on1TQlDfWdV1fqFnIi/XfEtNIiVFhiG5GYUQ4YSJ9ISJutauzo31X/RPCFKNAkM+rs+YV2Y8B3zgtq6JYi8FvM5ePT+wlUeNbVu2IFxEYSJj3kcCVXRUc/Wkj/ZlSl4HsHBCYgBwHgZHoxuxqdvdw5q2TJSaiFzIogDewPPRkvo1xsCFi4gVs1RtbVabnxQl7RgSCBSdsjoEjuPonrPoZh4iJ6Fmr1bU1LBwf8u3QGgfRKOVr9ptYeA+QrgZ2N4nU2tHghH4vtjOgp9BvFrZe5PvJ/QNB0RkPYYUVkbuiiH2YV3CfOJft4iJDFwiNXKVNBrvyb8Cxz591UaHe1IisABs40ularbbMLCRhRPG9iI7IlkRL+JfoE/9XJF3S6K1oZCMH3QAJmG5qPdhnvUZe6SqItep1XqC2wWYClAwH+2YggedMle2ZYzHIVCNK+rSK/AqpEDGG6DJAb3tQ4XssMZWHrEioMzow2cGC1LRRT4a2W7aErVoaxLHA19iaATCjrkCQdnPzE3AM0dsUkGgINAp4Y5+gbe0sGC7zM+OMEfEpS4dI7YbyN4jwNRRb0gYzvlyBIDMGTI3HMK/GEQYzE+NFsNGNHcCqU4L2F2tIOfm3ygfI10r0J4CM+VexcC9oW1cgjn0fS9FEavYbhQyfn4hKCZCj3FsCHXPbQRrRFwNSND2hfILvaICvkQEkCLnYZ6KnPa9BBoWv5RfjoKj6HoZMdVNUQcQW1mMII74TSGDvIracIL7YUGS9K5wtMcDG1PqUOKqHqZmojWBQbevvwO6SyrItfUZ7fV4iNXxglvhkDPPThZKA0wI7IxlmnwvAZ0NgTismaci8hM5p0q6cAYHXxHzKzLx6wFPQVPKCSyvkV6S1ifQECIrlfW5UIjSujIL1bHW2Bb6+bXvD7HAYn+zyEDnsGI3QPHDkR40e4PMK7uP1uKckZGejxjWyz9kisZFQrXkCr8DzSBbuRomkSyREIn4aBV/jPhcMuWhpiYnx9YP5zNOBlcWBn9BQnvR+p3ZPfEqfhZnx+eMtEdyTBAfUQkZgaiOS2xOWmGkHq4BvSzGMiHMi2JPaDdSolq+KEgfRDy8IJ7UTjPfMe48z1b/0rdLoEZ0XwurCvYeRNcAUQNvmScGOF57QlQ3vHlqHzCojMCikxaRxphrwUpFnwEag8MQTK8rvKbKYhdZqbbEd+BFf8ySpFY0Y6CqJPIJsBPPP4kw1RO3SwSfpAI+buCF/PXRiAoZADPFr30q7MF5Q7ZgsYuAnfAncxzaCRCyRUTVYeRHxMsAiHBIzG+tuQWxShgVH7f4N6wEiHsfAqkv2ZTGiDJkQs0YBoHd9o8ysElc0QtDMwe/bF4jNGTKffDvNFlSmP7/AnmSl8ygRn4W6aayOJUb0CATkenUsso3wif1VxvFHkRn9bUOQBlICD2Uymg3J0bGqCIbfEm0a5ScDNi3PO/tki6cfqyNvmXF0szlzOtuEjtYUgUQkzi+JjSk3BK5lYmgcgvkFnP2GyNcO3Q40BvdF+cS+Qtx42JNmHTe1K7DwQM0QQyKjy4xG1FpxYw/zeONy1S/QUijsKPEU4nziL88M0/j3Zx7I9uuWmMP3P4oU5XgDD0VsYBSHF1CFxeSqSbOwMADM14iDr+xK46Dz6yyPvP7WQsJnbgNpHubMDGh6Z5hXGvfiUQoAwWlR1c7QjchMk/09sNhihhEPDDfvBZFyyCAy+HUAxsHiQc56uC7GIpKKUOEIsHLayFl9pm6KRPsaYl7wRuMCrhj6HC+b9xzPCPbNFK5hdY9rlAYhAIwoK2a2MjrTyxKmzfoHjMixa6S0qghHyeRMxzOClZJwdxmgpu+VDHWf/miIjbvRNQsmGbopttytIaaaNr4glAwGX5fsZTQOTrMZPCjFr0lEBCtoIWTSigz+ire0tJjD6qwyiKT8t9UlGpcJGx7SxxOdGSIulxU/Qnl6xMHDkgSJRzLNNKBOkeqmWLRvQ6TbbntU9LaEFTErKo9dxxRfJVvwS7U1ielvJ6PQxDazwt0BRVlMNw0YRFETWL4u+aML18OpBYxJIgsrRvil0/VOWQddOZpRXRgAvxTy6biT1ZBSICpQA/ulIFpoT75ufg0HmQiXxPeew3tUpoZWGhk+SMVIm69SNbSALa9mgyrZUTfRQfg+UnUL1bx1ueTUrTwGR4WC5fj5NFoifAdSfAc6jdLEqouqelKuuCpLzrOBGS2oDamnkg6kJ+e1ymzar/ClclcWg1XI5ZQZnVDASVUNpD6ddph3kxLyLM7XP8ord2FTCImWafcR27xKZ4MHdIJrM7yR8/QxS6ua0jR5FfrnOqvKvKaySOJWdlI1b1JWdTP9ckhR/mTuTOeqApHB5GqeFkX9I/NYCGV8XaVF/ZZFWtGFrZbzvCqKopy/nA8tAhrVPrUrpnn2rT7Om7PV+fn58y0I08379Gk+nz9dX0QqzPEyz5P57Prt+eNg4Ez24/N6c2tKy8uwH3R0cPHwfDFkxyafF+/39+8XCxsgOD0aH333u/Rfs7Qqt98HSSPP7f8qHR18rOn2G+fxf4JuVvd31/X3Qc73MIv7/4v+D2rAZ8jARc6+AAAAAElFTkSuQmCC" alt="nykaa"/>
    
         <div>Categories
              
           
         </div>
         <div>Brands</div>
         <div>Nykaa fashion</div>
         <div>Beauty Advice</div>
         <div>Nykaa Network</div>
     </div>
     <div id="navcustomer">
    
        <div id="navsearch">
            <div>
                      <i class="fa-solid fa-magnifying-glass fa-lg" style="color:rgb(168, 164, 164)" ></i>
                     
               </div>
            <div>
                      <input style="border:none"id="navsearchPd" type="text" value="" placeholder="Search on Nykaa " >
            </div>
           
  </div>
     <a href="signup.html">
      <div class="navabc" id="account12">
        <div><i class="fa-regular fa-user fa-lg" style="color: black; size: 60px;"></i></div>
        <div>Account</div>
      </div>
    </a>
        
         <div id="cart"><i class="fa fa-shopping-bag fa-lg" aria-hidden="true" style="color: black ;size:60px;"></i></div>
     </div>
</div>



    `;
};

export { navbar };
