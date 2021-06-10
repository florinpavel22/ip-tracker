const banner = document.querySelector(".info-banner");

const updateUI = (info) => {
  banner.innerHTML = `
        <div class="row">
            <span class="title">IP Address</span>
            <p class="result">${info.ip}</p>
        </div>

        <div class="row">
            <span class="title">Location</span>
            <p class="result">${info.location.city}, ${info.location.country}</p>
        </div>

        <div class="row">
            <span class="title">Timezone</span>
            <p class="result">UTC ${info.location.timezone}</p>
        </div>

        <div class="row">
            <span class="title">ISP</span>
            <p class="result">${info.isp}</p>
        </div>
        `;
};

export { banner, updateUI as default };
