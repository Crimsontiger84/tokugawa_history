const generalsData = {
    // 사천왕
    honda: {
        id: 'honda',
        name: '혼다 다다카쓰',
        role: '사천왕 (四天王)',
        img: 'images/honda.png',
        desc: '도쿠가와 사천왕 중 한 명. 평생 57회의 전투에 참가했음에도 단 한 번도 상처를 입지 않았다는 전설적인 맹장입니다. 도요토미 히데요시조차 "천하 무쌍의 장수"라 칭찬했으며, 그의 상징인 녹각(사슴뿔) 투구는 적들에게 공포의 대상이었습니다. 무용뿐만 아니라 의리 또한 깊어 이에야스의 두터운 신임을 받았습니다.'
    },
    sakai: {
        id: 'sakai',
        name: '사카이 다다쓰구',
        role: '사천왕 (四天王)',
        img: 'images/sakai.png',
        desc: '도쿠가와 사천왕의 필두이자 가신단의 최고참. 나가시노 전투에서 오다-도쿠가와 연합군이 승리하는 데 결정적인 역할을 한 다케다 군의 배후 기습을 성공시킨 인물입니다. 노련한 전술과 충성심으로 이에야스의 패업에 지대한 공헌을 하였습니다.'
    },
    sakakibara: {
        id: 'sakakibara',
        name: '사카키바라 야스마사',
        role: '사천왕 (四天王)',
        img: 'images/sakakibara.png',
        desc: '사천왕 중 한 명으로, 혼다 다다카쓰와 동갑내기이자 라이벌이었습니다. 코마키-나가쿠테 전투에서 도요토미 히데요시의 분노를 사는 격문을 발표할 정도로 대담했으며, 무용뿐만 아니라 서예와 행정에도 능했던 지장(智将)이었습니다.'
    },
    ii_naomasa: {
        id: 'ii_naomasa',
        name: '이이 나오마사',
        role: '사천왕 (四天王)',
        img: 'images/ii_naomasa.png',
        desc: '사천왕 중 가장 젊은 장수. 붉은 갑옷으로 무장한 부대인 \'이이의 붉은 악마(아카조나에)\'를 이끌며 전장을 누볐습니다. 세키가하라 전투에서 최선봉에 서서 용맹하게 싸우다 입은 총상으로 인해 젊은 나이에 요절했지만, 그의 활약은 도쿠가와 가문의 승리에 쐐기를 박았습니다.'
    },
    // 기타 십육신장 (사천왕 제외 12명)
    okubo_tadayo: {
        id: 'okubo_tadayo',
        name: '오쿠보 다다요',
        role: '십육신장',
        img: 'images/okubo_tadayo.png',
        desc: '도쿠가와 가문의 오랜 가신으로 미카와 일향종 반란 진압 등 수많은 전투에서 활약했습니다. 항상 이에야스의 곁에서 그를 지켰으며, 충직하고 성실한 성품으로 널리 알려져 있습니다.'
    },
    okubo_tadasuke: {
        id: 'okubo_tadasuke',
        name: '오쿠보 다다스케',
        role: '십육신장',
        img: 'images/okubo_tadasuke.png',
        desc: '다다요의 동생. 형과 함께 이에야스를 위해 분골쇄신했으며 뛰어난 창술을 자랑했습니다. 타케다 가문과의 여러 전투에서 선봉에 서서 큰 공을 세웠습니다.'
    },
    torii_mototada: {
        id: 'torii_mototada',
        name: '토리이 모토타다',
        role: '십육신장',
        img: 'images/torii_mototada.png',
        desc: '이에야스의 어린 시절(인질 시절)부터 함께한 최측근. 세키가하라 전투 직전, 서군의 대군을 막기 위해 후시미성에서 장렬히 결사항전하여 이에야스가 동군을 결집할 시간을 벌어주고 전사한 충신입니다.'
    },
    torii_tadayoshi: {
        id: 'torii_tadayoshi',
        name: '토리이 다다요시',
        role: '십육신장',
        img: 'images/torii_tadayoshi.png',
        desc: '토리이 모토타다의 아버지로, 이마가와 가문의 인질이었던 이에야스를 위해 쌀을 몰래 비축하며 가문의 재건을 준비했던 눈물겨운 충성심의 소유자입니다.'
    },
    hattori_hanzo: {
        id: 'hattori_hanzo',
        name: '핫토리 한조',
        role: '십육신장',
        img: 'images/hattori_hanzo.png',
        desc: '이가 닌자들을 통솔했던 인물로 유명하지만, 실제로는 창술에 매우 뛰어난 무장이기도 했습니다. 이가 넘기(혼노지의 변 직후 이에야스의 탈출)에서 이가와 고가 닌자들을 동원해 이에야스를 무사히 탈출시킨 일등 공신입니다.'
    },
    watanabe_moritsuna: {
        id: 'watanabe_moritsuna',
        name: '와타나베 모리쓰나',
        role: '십육신장',
        img: 'images/watanabe_moritsuna.png',
        desc: '뛰어난 창술 덕분에 \'창의 한조\'라 불렸습니다. 미카와 일향종 반란 때는 일시적으로 이에야스에게 반기를 들었으나, 용서받은 후 아네가와 전투, 미카타가하라 전투 등에서 수많은 전공을 세웠습니다.'
    },
    hiraiwa_chikayoshi: {
        id: 'hiraiwa_chikayoshi',
        name: '히라이와 지카요시',
        role: '십육신장',
        img: 'images/hiraiwa_chikayoshi.png',
        desc: '이에야스의 슨푸 인질 시절부터 동고동락한 가신. 이에야스의 장남 노부야스의 후견인을 맡을 정도로 신임이 두터웠으며, 내정과 군사 양면에서 활약했습니다.'
    },
    naito_masanari: {
        id: 'naito_masanari',
        name: '나이토 마사나리',
        role: '십육신장',
        img: 'images/naito_masanari.png',
        desc: '활의 명수로 유명하여 \'나이토의 백발백중\'이라 불렸습니다. 수많은 전장에서 적의 무장들을 활로 쓰러뜨렸으며, 이에야스의 본진을 호위하는 중요한 임무를 맡았습니다.'
    },
    takagi_kiyohide: {
        id: 'takagi_kiyohide',
        name: '다카기 기요히데',
        role: '십육신장',
        img: 'images/takagi_kiyohide.png',
        desc: '오다 노부나가와 도요토미 히데요시의 가신으로도 있었으나 이후 도쿠가와 가문에 합류하여 공을 세운 무장. 노련한 전술안을 가진 장수였습니다.'
    },
    yonekitsu_tsuneharu: {
        id: 'yonekitsu_tsuneharu',
        name: '요네키쓰 쓰네하루',
        role: '십육신장',
        img: 'images/yonekitsu_tsuneharu.png',
        desc: '미카와 시대부터 헌신적으로 도쿠가와를 섬겼던 무장. 타케다 군과의 격전에서 두각을 나타냈으며 막부의 기초를 다지는 데 기여했습니다.'
    },
    matsudaira_yasutada: {
        id: 'matsudaira_yasutada',
        name: '마쓰다이라 야스타다',
        role: '십육신장',
        img: 'images/matsudaira_yasutada.png',
        desc: '도쿠가와 이에야스의 친족(일문) 출신으로, 여러 전투에서 선봉을 맡아 막강한 무력을 과시했습니다. 도쿠가와 가문의 굳건한 결속력을 보여주는 상징적 인물입니다.'
    },
    hachiya_tadatsugu: {
        id: 'hachiya_tadatsugu',
        name: '하치야 다다쓰구',
        role: '십육신장',
        img: 'images/hachiya_tadatsugu.png',
        desc: '본래 오다 노부나가의 가신이었으나 나중에 이에야스를 섬기게 된 장수. 전투 경험이 풍부하여 도쿠가와 군의 전력 강화에 큰 도움을 주었습니다.'
    }
};

const fourKingsIds = ['sakai', 'honda', 'sakakibara', 'ii_naomasa'];
const sixteenGeneralsIds = [
    'okubo_tadayo', 'okubo_tadasuke', 'torii_mototada', 'torii_tadayoshi',
    'hattori_hanzo', 'watanabe_moritsuna', 'hiraiwa_chikayoshi', 'naito_masanari', 
    'takagi_kiyohide', 'yonekitsu_tsuneharu', 'matsudaira_yasutada', 'hachiya_tadatsugu'
];

document.addEventListener('DOMContentLoaded', () => {
    const fourKingsContainer = document.getElementById('four-kings-grid');
    const sixteenGeneralsContainer = document.getElementById('sixteen-generals-grid');
    
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalRole = document.getElementById('modal-role');
    const modalDesc = document.getElementById('modal-desc');

    // 카드 생성 함수
    function createCard(id, container) {
        const data = generalsData[id];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${data.img}" alt="${data.name}">
            </div>
            <div class="card-info">
                <h3>${data.name}</h3>
                <span>${data.role}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            modalImg.src = data.img;
            modalTitle.textContent = data.name;
            modalRole.textContent = data.role;
            modalDesc.textContent = data.desc;
            
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });

        container.appendChild(card);
    }

    // 그리드 렌더링
    fourKingsIds.forEach(id => createCard(id, fourKingsContainer));
    sixteenGeneralsIds.forEach(id => createCard(id, sixteenGeneralsContainer));

    // 모달 닫기 로직
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // transition 시간과 일치
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
