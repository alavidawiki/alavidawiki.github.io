const T_header = document.createElement('template');

T_header.innerHTML = `
<header>
        <div id="logo_container" onclick="location.href = '.';">
            <img id="logo_image" src="https://kingpvz.github.io/global_resources/projects/alavida.png" />
            <h1 id="logo_title">Alavida WIKI</h1>
            <div id="h_separator"></div>
        </div>
        <div id="link_container">
            <a class="header_link" href="https://kingpvz.github.io/projects/alavida" target="_blank" title="Official Website for Alavida">Alavida Website</a>
            <a class="header_link" href="https://github.com/alavidawiki/alavidawiki.github.io" target="_blank" title="This Website's GitHub Repository">GitHub Repository</a>
            <a class="header_link" href="http://www.ageofcivilizationsgame.com/topic/177266-age-of-alavida-2565-provinces37-scenarios-version-12/" target="_blank" title="Download Age of Alavida (mod of Age of History 2)">Download AoA</a>
            <a class="header_link" href="https://kingpvz.github.io/" target="_blank" title="Website of the developer (me)">Kingpvz</a>
        </div>
    </header>
`;