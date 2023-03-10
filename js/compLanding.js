

const landingPage = {
    template: `
    <div
        style="background: #F7F6EB;"
        v-once
    >
        <v-parallax
            src="img/classRoom.jpg"
            style="
                height: clamp(18.75rem, 32vw + 180px, 37.5rem)
            "

        >
        <p style="width:100%; height:100%; position: absolute; background:#00A0E933; z-index:-1;"></p>

        <section 
            style="
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 16px;
            "
        >
            <div
                style="
                    color: #fffcf7;
                    font-family: serif, 'Cambria';
                    font-size: clamp(1.5rem, 5vw + 1rem, 4.5rem);
                    margin:4.5% 0 0 8%;

                    opacity: 0;
                    animation: slideInLt 1.5s 1s forwards;
                "
            >
                STUDY FOR TWO
            </div>

            <section
                style="
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    gap: 16px;
                "
            >
                <div
                    style="
                        color: #2d287f;
                        font-family: 'EB Garamond', serif;
                        font-size: clamp(1rem, 3vw + 1rem, 3rem);
                        writing-mode: vertical-rl;
                        margin: 0 0 0 5.5%;

                        opacity: 0;
                        animation: slideInTp 1.5s 1s forwards;
                    "
                >
                    Osaka Univ.
                </div>
                <div
                    style="
                        color: #fffcf7;
                        font-family: serif;
                        font-size: clamp(0.5rem, 0.75vw + 0.75rem, 8rem);
                        text-align:right;
                        padding: 4px 8% 2px 0;
                        margin-top:4%;
                        align-self: flex-end;
                        flex-grow:1;
                        border-bottom: #EB6100 solid;

                        opacity: 0;
                        animation: slideInRt 1.5s 1s forwards;
                    "
                >
                    ??????????????????????????????????????????????????????<br>????????????????????????
                </div>
            </section>

            <div
                class="
                    d-flex justify-space-around align-center flex-column align-self-stretch
                "
                style="
                    flex-grow:1;

                    opacity: 0;
                    animation: fadeIn 3s 1s forwards;
                "
            >
                <v-btn
                    variant="flat"
                    :rounded="0"
                    color="#00000099"
                >
                    <router-link
                        to="/search"
                        style="
                            font-family: serif;
                            font-size: clamp(1rem, 0.5vw + 0.5rem, 8rem);
                            text-decoration: none;
                            color: #F0E68C;
                        "
                    >
                        ??????????????????????????????
                    </router-link>
                </v-btn>
            </div>
        </section>    
        </v-parallax>

        <div
            style="
                display: flex;
                width: 100%;
                aspect-ratio: 16/9;
                justify-content: center;
                align-items: center;
            "
        >
            <p
                style="
                    font-family: serif;
                    font-size: clamp(1rem, 3vw + 1rem, 3rem);
                    text-align: center;
                "
            >
                <span
                    style="
                        opacity: 0;
                        animation: fadeIn 3s 3s forwards;
                    "
                >
                    ?????????????????????
                </span><br>
                <span
                    style="
                        opacity: 0;
                        animation: fadeIn 3s 4s forwards;
                    "
                >
                    ????????????
                </span><br>
                <span
                    style="
                        opacity: 0;
                        animation: fadeIn 3s 5s forwards;
                    "
                >
                    ??????????????????
                </span>
            </p>
        </div>

        <div
            style="
                text-align: center;
                aspect-ratio: 16/9;
            "
        >
        <iframe width="80%" height="80%" src="https://www.youtube.com/embed/KYhv-CtFgNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p
            style="
                font-family: serif;
                font-size: clamp(0.5rem, 0.75vw + 0.75rem, 8rem);
                text-align: center;
                padding: 0 5%;
            "
        >
        ?????????????????????????????????????????????????????????????????????????????????????????????????????????<br>
        <b>??????????????????????????????????????????????????????????????????????????????????</b>
        </p>

        <br>
        <div
            style="
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
            "
        >
            <v-btn
                variant="flat"
                :rounded="0"
                color="#00A0E999"
            >
                <a
                    href="https://studyfortwo.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                        font-family: serif;
                        font-size: clamp(1rem, 0.5vw + 0.5rem, 8rem);
                        text-decoration: none;
                        color: #fffcf7;
                    "
                >
                    ???????????????????????????
                </a>
            </v-btn>
        </div>
        <br>

        <div style="padding: 0 5%;">
            <p
                style="
                    padding: 8rem 0 1rem 0;
                    text-align: center;
                "
            >
                ?????????STUDY FOR TWO??????????????????????????????????????????????????????3????????????????????????????????????
            </p>
            <v-timeline side="end" align="start">
                <v-timeline-item
                    dot-color="green"
                    icon="mdi-book-open-page-variant"
                    fill-dot
                >
                    <div class="text-h5">??????</div>
                    <p class="text-body-1">
                        ???????????????????????????????????????????????????????????????????????????
                    </p>
                </v-timeline-item>

                <v-timeline-item
                    dot-color="blue"
                    icon="mdi-cart"
                    fill-dot
                >
                    <div class="text-h5">??????</div>
                    <p class="text-body-1">
                        ????????????????????????????????????????????????????????????????????????????????????
                    </p>
                </v-timeline-item>

                <v-timeline-item
                    dot-color="red"
                    icon="mdi-heart"
                    fill-dot
                >
                    <div class="text-h5">??????</div>
                    <p class="text-body-1">
                        ?????????80%??????????????????????????????????????????????????????????????????????????????
                    </p>
                    <p class="text-body-2">
                        ??????????????????20%??????????????????????????????????????????????????????
                    </p>
                </v-timeline-item>
            </v-timeline>
        </div>

        <div
            class="
                d-flex justify-space-around align-center flex-column align-self-stretch
            "
            style="
                margin: 4rem;
                flex-grow:1;
            "
        >
            <v-btn
                variant="flat"
                :rounded="0"
                color="#00000099"
            >
                <router-link
                    to="/search"
                    style="
                        font-family: serif;
                        font-size: clamp(1rem, 0.5vw + 0.5rem, 8rem);
                        text-decoration: none;
                        color: #F0E68C;
                    "
                >
                    ??????????????????????????????
                </router-link>
            </v-btn>
        </div>
    


        
    </div>
    
    `
}