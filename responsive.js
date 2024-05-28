const playBar = document.getElementById('playBar');
let previousWidth = window.innerWidth;

function updateContent() {
    const currentWidth = window.innerWidth;
    if((currentWidth >= 700 && previousWidth < 700) || (currentWidth < 700 && previousWidth >= 700)) {
        if(currentWidth >= 700) {
            // Default content for larger screens
            playBar.innerHTML = 
            `<div id="currSongInfo" class="flex">
                    <div id="thumbNail"><img src="Resources/svg/music.svg" alt=""></div>
                    <div id="titleArtist" class="flex">
                        <div id="title">Track Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur.</div>
                        <div id="artist">Artist</div>
                    </div>
                </div> 
                <div id="playControl" class="flex">  
                    <div id="seekAndTimeInfo" class="flex">
                        <div id="elapsedTime" class="time flex">00:00</div>  
                        <div id="seekBar" class="flex">
                            <div id="activeBar" class="flex">
                                <div id="seekBtn"></div>
                            </div>
                        </div>
                        <div id="totTime" class="time flex">00:00</div>
                    </div>       
                    <div id="console" class="flex">
                        <div id="shuffle" class="exceptPlay">
                            <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg></button>
                        </div>
                        <div id="prev" class="exceptPlay">
                            <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></button>
                        </div>
                        <div id="play">
                            <button class="playBtn" aria-label="Play" data-testid="control-button-playpause" style="--button-size: 32px;"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                        </div>
                        <div id="next" class="exceptPlay">
                            <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></button>
                        </div>
                        <div id="repeat" class="exceptPlay">
                            <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></button>
                        </div>
                    </div>   
                </div>      
            <div id="otherControls" class="flex">
                <div id="nowPlaying" class="otherBtn">
                    <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 RK45o6dbvO1mb0wQtSwq EHxL6K_6WWDlTCZP6x5w" data-testid="control-button-npv" data-active="true" aria-pressed="true" data-restore-focus-key="now_playing_view" aria-label="Now playing view" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg></span></button>
                </div>
                <div id="lyrics" class="otherBtn">
                    <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 Xmv2oAnTB85QE4sqbK00" data-testid="lyrics-button" data-active="false" aria-pressed="false" aria-label="Lyrics" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg></span></button>
                </div>
                <div id="queue" class="otherBtn">
                    <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63" data-testid="control-button-queue" data-active="false" aria-pressed="false" data-restore-focus-key="queue" aria-label="Queue" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg></span></button>
                </div>
                <div id="connectDevice" class="otherBtn">
                    <button class="control-button DMWoYmJsYdFjGQbeGH9Q" aria-label="Connect to a device" aria-expanded="false" id="device-picker-icon-button"><svg data-encore-id="icon" role="presentation" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg></button>                </div>
                <div id="volControl">
                    <div id="mute">
                        <button class="muteBtn"><svg data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg></button>
                    </div>
                    <div id="volSlider">
                        <input  type="range" class = "slider" min="0" max="100" step="0.01" />
                    </div>
                </div>
                <div id="miniPlayer" class="otherBtn">
                    <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63" data-testid="pip-toggle-button" data-active="false" aria-pressed="false" aria-label="Open Miniplayer" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path></svg></span></button>
                </div>
                <div id="fullScreen" class="otherBtn">
                    <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 control-button" data-testid="fullscreen-mode-button" data-active="false" aria-pressed="false" aria-label="Full screen" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg></span></button>
                </div>
            </div>`
        }
        else if(currentWidth < 700){
            // Content for viewport width less than 700px
            playBar.innerHTML = 
            `<div id="seekAndTimeInfo" class="flex"> 
                <div id="elapsedTime" class="time flex">00:00</div>  
                <div id="seekBar" class="flex">
                    <div id="activeBar" class="flex">
                        <div id="seekBtn"></div>
                    </div>
                </div>
                <div id="totTime" class="time flex">00:00</div>
            </div>
            <div id="player" class="flex">
                <div id="thumbNail"><img src="Resources/svg/music.svg" alt=""></div>
                <div id="consoleAndInfo" class="flex">
                    <div id="infoAndLike" class="flex">
                        <div id="titleAndArtist" class = "flex">
                            <div id="title">Track</div>
                            <div id="artist">Artist</div>
                        </div>
                        <div id="like" class = "flex"><img src="Resources/like.svg" alt=""></div>
                    </div>
                    <div id="console" class="flex">
                        <div id="shuffle"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg></button>                    </div>
                        <div id="prev"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></button></div>
                        <div id="play"><button class="playBtn" aria-label="Play" data-testid="control-button-playpause" style="--button-size: 32px;"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button></div>
                        <div id="next"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></button></div>
                        <div id="repeat"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></button></div>
                    </div>
                </div>
            </div>`
        }
    }
    else if(currentWidth == previousWidth && currentWidth >= 700) {
        // Default content for larger screens
        playBar.innerHTML = 
        `<div id="currSongInfo" class="flex">
                <div id="thumbNail"><img src="Resources/svg/music.svg" alt=""></div>
                <div id="titleArtist" class="flex">
                    <div id="title">Track</div>
                    <div id="artist">Artist</div>
                </div>
            </div> 
            <div id="playControl" class="flex">  
                <div id="seekAndTimeInfo" class="flex">
                    <div id="elapsedTime" class="time flex">00:00</div>  
                    <div id="seekBar" class="flex">
                        <div id="activeBar" class="flex">
                            <div id="seekBtn"></div>
                        </div>
                    </div>
                    <div id="totTime" class="time flex">00:00</div>
                </div>       
                <div id="console" class="flex">
                    <div id="shuffle" class="exceptPlay">
                        <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg></button>
                    </div>
                    <div id="prev" class="exceptPlay">
                        <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></button>
                    </div>
                    <div id="play">
                        <button class="playBtn" aria-label="Play" data-testid="control-button-playpause" style="--button-size: 32px;"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                    </div>
                    <div id="next" class="exceptPlay">
                        <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></button>
                    </div>
                    <div id="repeat" class="exceptPlay">
                        <button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></button>
                    </div>
                </div>   
            </div>      
        <div id="otherControls" class="flex">
            <div id="nowPlaying" class="otherBtn">
                <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 RK45o6dbvO1mb0wQtSwq EHxL6K_6WWDlTCZP6x5w" data-testid="control-button-npv" data-active="true" aria-pressed="true" data-restore-focus-key="now_playing_view" aria-label="Now playing view" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg></span></button>
            </div>
            <div id="lyrics" class="otherBtn">
                <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 Xmv2oAnTB85QE4sqbK00" data-testid="lyrics-button" data-active="false" aria-pressed="false" aria-label="Lyrics" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg></span></button>
            </div>
            <div id="queue" class="otherBtn">
                <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63" data-testid="control-button-queue" data-active="false" aria-pressed="false" data-restore-focus-key="queue" aria-label="Queue" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg></span></button>
            </div>
            <div id="connectDevice" class="otherBtn">
                <button class="control-button DMWoYmJsYdFjGQbeGH9Q" aria-label="Connect to a device" aria-expanded="false" id="device-picker-icon-button"><svg data-encore-id="icon" role="presentation" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg></button>                </div>
            <div id="volControl">
                <div id="mute">
                    <button class="muteBtn"><svg data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg></button>
                </div>
                <div id="volSlider">
                    <input type="range" class = "slider" min="0" max="100" step="0.01" />
                </div>
            </div>
            <div id="miniPlayer" class="otherBtn">
                <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63" data-testid="pip-toggle-button" data-active="false" aria-pressed="false" aria-label="Open Miniplayer" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path></svg></span></button>
            </div>
            <div id="fullScreen" class="otherBtn">
                <button class="Button-sc-1dqy6lx-0 hidZeW KAZD28usA1vPz5GVpm63 control-button" data-testid="fullscreen-mode-button" data-active="false" aria-pressed="false" aria-label="Full screen" data-encore-id="buttonTertiary"><span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg></span></button>
            </div>
        </div>`
    }
    else if(currentWidth == previousWidth && currentWidth < 700) {
        playBar.innerHTML = 
        `<div id="seekAndTimeInfo" class="flex"> 
            <div id="elapsedTime" class="time flex">00:00</div>  
            <div id="seekBar" class="flex">
                <div id="activeBar" class="flex">
                    <div id="seekBtn"></div>
                </div>
            </div>
            <div id="totTime" class="time flex">00:00</div>
        </div>
        <div id="player" class="flex">
            <div id="thumbNail"><img src="Resources/svg/music.svg" alt=""></div>
            <div id="consoleAndInfo" class="flex">
                <div id="infoAndLike" class="flex">
                    <div id="titleAndArtist" class = "flex">
                        <div id="title">Track</div>
                        <div id="artist">Artist</div>
                    </div>
                    <div id="like" class = "flex"><img src="Resources/like.svg" alt=""></div>
                </div>
                <div id="console" class="flex">
                    <div id="shuffle"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg></button>                    </div>
                    <div id="prev"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></button></div>
                    <div id="play"><button class="playBtn" aria-label="Play" data-testid="control-button-playpause" style="--button-size: 32px;"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button></div>
                    <div id="next"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></button></div>
                    <div id="repeat"><button class = "otherBtn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></button></div>
                </div>
            </div>
        </div>`
    }
    previousWidth = currentWidth
}
updateContent(); // Initial content update
window.addEventListener('resize', updateContent); // Update content on resize


//Event listener for hamburger to display left
const hamBurger = document.querySelector('#hamburger button')

hamburger.addEventListener('click', async () => {
    hamburger.classList.toggle('active');
    const leftDiv = document.querySelector('#left');
    if (hamburger.classList.contains('active')) {
        console.log('Hamburger button activated!');
        leftDiv.style.display = "flex" 
        setTimeout(() => {
            leftDiv.style.width = "85vw";
            leftDiv.style.opacity = 1;
        }, 10);
    } else {
        console.log('Hamburger button deactivated!');        
        // document.querySelector('#left').style.display = "none" 
        leftDiv.style.width = 50 + "vw"
        leftDiv.style.opacity = 0 
        setTimeout(() => {
            leftDiv.style.display = "none";
        }, 200);

    }
});