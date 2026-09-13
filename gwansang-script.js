(function () {
    const RESULTS = [
        // ── 지배적 ──
        {
            key: 'master', name: '마스터', accent: '#4C5B8C',
            tagline: '눈빛부터 다스리는 관상이에요',
            description: '눈빛에 흔들림이 없고 표정에 힘이 있어서, 가만히 있어도 주변을 압도하는 인상이에요. 한번 정한 기준은 끝까지 밀고 나가는 카리스마가 얼굴에 그대로 드러난답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 또렷하고 시선 처리가 안정적이라 상대를 자연스럽게 집중시키는 힘이 있어요.' },
                { title: '분위기', content: '표정에 여유가 있어서 굳이 애쓰지 않아도 자연스레 주도권을 쥐는 분위기를 풍겨요.' },
            ],
            closingMessage: '타고난 통솔력이 얼굴에 새겨진 마스터상이에요. 오늘도 그 카리스마 마음껏 발휘하세요!',
        },
        {
            key: 'owner', name: '오너', accent: '#5B6E8C',
            tagline: '든든함이 얼굴에 묻어나는 관상이에요',
            description: '눈매가 안정적이고 표정에 여유가 있어서 곁에 있으면 든든하다는 말을 자주 듣는 인상이에요. 책임감 있는 분위기가 자연스럽게 배어나온답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 따뜻하면서도 흔들리지 않아서 신뢰감을 주는 편이에요.' },
                { title: '분위기', content: '전체적인 인상이 차분해서 함께 있는 사람을 편안하게 만들어주는 얼굴이에요.' },
            ],
            closingMessage: '보고만 있어도 든든한 오너상이에요. 곁에 있는 사람들이 참 안심하겠어요!',
        },
        {
            key: 'brat-tamer', name: '브랫테이머', accent: '#8B5A7C',
            tagline: '여유로운 미소 속에 승부욕이 숨은 관상이에요',
            description: '입꼬리에 장난기가 스며있고 눈빛엔 여유가 넘쳐서, 어떤 도발에도 씩 웃어넘길 것 같은 인상이에요. 참을성 있게 상황을 지켜보는 노련한 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈매에 능글맞은 여유가 있어서 상대의 밀당을 즐기는 인상이에요.' },
                { title: '분위기', content: '표정이 느긋해서 웬만한 도발엔 끄떡없어 보이는 분위기를 풍겨요.' },
            ],
            closingMessage: '여유 만점 브랫테이머상이에요. 누가 장난쳐도 결국 웃는 쪽은 당신이겠네요!',
        },
        {
            key: 'hunter', name: '헌터', accent: '#3F4454',
            tagline: '눈빛만으로 긴장감을 주는 관상이에요',
            description: '눈매가 날카롭고 시선이 강렬해서, 마주치면 순간 긴장하게 되는 인상이에요. 얼굴 전체에 본능적인 에너지가 흘러넘친답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 강렬하고 집요해서 한번 향한 시선은 쉽게 거두지 않는 인상이에요.' },
                { title: '분위기', content: '전체적인 분위기가 야성적이라 가만히 있어도 존재감이 확 느껴져요.' },
            ],
            closingMessage: '눈빛 하나로 분위기를 압도하는 헌터상이에요. 그 강렬함, 함부로 마주치기 무섭네요!',
        },
        {
            key: 'boss', name: '보스', accent: '#4C5B8C',
            tagline: '품격이 얼굴에서부터 느껴지는 관상이에요',
            description: '표정에 여유와 품격이 배어있어서 자연스럽게 대접받는 자리가 어울리는 인상이에요. 눈치껏 챙김받는 게 당연해 보이는 우아한 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 여유롭고 우아해서 굳이 말하지 않아도 원하는 걸 알아채게 만드는 인상이에요.' },
                { title: '분위기', content: '전체적으로 품격 있는 분위기라 자연스럽게 상석이 어울려요.' },
            ],
            closingMessage: '품격과 여유가 흐르는 보스상이에요. 어딜 가나 대접받는 얼굴이네요!',
        },
        {
            key: 'rigger', name: '리거', accent: '#6E5B8C',
            tagline: '섬세함과 집중력이 공존하는 관상이에요',
            description: '눈매가 세심하고 손끝 야무진 인상이라, 뭐든 정교하게 해낼 것 같은 느낌을 줘요. 차분하면서도 예술가적인 분위기가 얼굴에 묻어난답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 차분하고 집중력이 있어서 세밀한 작업이 잘 어울리는 인상이에요.' },
                { title: '분위기', content: '전체적으로 정교하고 신중한 분위기라 믿고 맡기고 싶은 얼굴이에요.' },
            ],
            closingMessage: '섬세함과 예술적 감각이 느껴지는 리거상이에요. 뭘 해도 완성도가 남다르겠어요!',
        },
        {
            key: 'daddy', name: '대디', accent: '#C48F3C',
            tagline: '엄격함 속 다정함이 느껴지는 관상이에요',
            description: '눈매는 진중하지만 웃을 때 따뜻함이 확 퍼지는 인상이에요. 돌봐주고 이끌어주는 게 자연스러운 포근한 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 진중하면서도 다정해서 기대고 싶은 마음이 드는 인상이에요.' },
                { title: '분위기', content: '전체적인 분위기가 든든하고 따뜻해서 곁에 있으면 마음이 편해져요.' },
            ],
            closingMessage: '엄격함과 다정함을 동시에 가진 대디상이에요. 이끌어주는 존재감이 자연스럽네요!',
        },
        {
            key: 'sadist', name: '사디스트', accent: '#8C3F4C',
            tagline: '미묘한 미소가 심상치 않은 관상이에요',
            description: '입꼬리가 살짝 올라간 미소에 묘한 여유가 담겨있어서, 상황을 즐기고 있다는 인상을 주는 얼굴이에요. 눈빛엔 관찰력 좋은 총명함이 엿보인답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 예리해서 상대의 반응을 놓치지 않고 지켜보는 인상이에요.' },
                { title: '분위기', content: '표정에 여유로운 미소가 걸려있어서 상황을 즐기는 분위기가 느껴져요.' },
            ],
            closingMessage: '알 수 없는 미소가 매력적인 사디스트상이에요. 그 여유, 함부로 넘볼 수 없겠네요!',
        },
        {
            key: 'spanker', name: '스팽커', accent: '#B5703F',
            tagline: '손끝 리듬감이 느껴지는 관상이에요',
            description: '표정 변화가 리드미컬하고 눈치가 빨라서, 타이밍 잡는 감각이 남다른 인상이에요. 상대 반응을 잘 캐치하는 센스 있는 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 예민하게 반응을 살피는 편이라 눈치가 빠르다는 말을 들을 인상이에요.' },
                { title: '분위기', content: '전체적으로 리듬감 있는 분위기라 강약 조절을 잘하는 느낌을 줘요.' },
            ],
            closingMessage: '센스와 타이밍이 좋은 스팽커상이에요. 완급 조절 하나는 확실하겠어요!',
        },
        {
            key: 'degrader', name: '디그레이더', accent: '#5B3F8C',
            tagline: '말빨이 심상치 않은 관상이에요',
            description: '입매가 야무지고 눈빛에 재치가 넘쳐서, 말 한마디로 분위기를 휘어잡을 것 같은 인상이에요. 언변이 좋다는 얘기를 자주 들을 얼굴이랍니다.',
            sections: [
                { title: '눈빛', content: '눈빛에 장난기와 총기가 함께 있어서 할 말은 하는 인상이에요.' },
                { title: '분위기', content: '표정이 여유롭고 자신감 있어서 말발로 분위기를 주도하는 느낌을 줘요.' },
            ],
            closingMessage: '언변과 재치가 넘치는 디그레이더상이에요. 말로는 절대 못 이기겠네요!',
        },
        {
            key: 'butler', name: '버틀러', accent: '#3F4454',
            tagline: '단정한 얼굴 속 반전이 숨은 관상이에요',
            description: '겉모습은 단정하고 예의 바르지만, 눈빛 한구석에 여유로운 계산이 엿보이는 인상이에요. 반듯함과 반전 매력을 동시에 가진 얼굴이랍니다.',
            sections: [
                { title: '눈빛', content: '눈매가 단정하지만 가끔 스치는 눈빛에서 만만치 않은 여유가 느껴져요.' },
                { title: '분위기', content: '전체적으로 예의 바른 분위기 속에 은근한 주도권이 숨어있는 느낌이에요.' },
            ],
            closingMessage: '반듯함 속 반전 매력이 있는 버틀러상이에요. 알고 보면 만만한 사람이 아니겠어요!',
        },
        {
            key: 'god', name: '갓', accent: '#C4A83C',
            tagline: '존재감 자체가 다른 관상이에요',
            description: '표정에 흔들림이 없고 분위기가 신비로워서, 말 한마디 없이도 존재감이 느껴지는 인상이에요. 웬만한 일엔 동요하지 않는 초연함이 있답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 고요하고 깊어서 쉽게 속을 읽을 수 없는 인상이에요.' },
                { title: '분위기', content: '전체적인 분위기가 여유롭고 초연해서 함부로 다가가기 어려운 느낌을 줘요.' },
            ],
            closingMessage: '존재만으로 다스리는 갓상이에요. 오늘도 흔들림 없이 유유히!',
        },
        // ── 피지배적 ──
        {
            key: 'slave', name: '슬레이브', accent: '#6E6E8C',
            tagline: '헌신적인 눈빛이 느껴지는 관상이에요',
            description: '눈빛이 순하고 표정에 정성이 담겨있어서, 상대를 잘 챙길 것 같은 인상이에요. 묵묵히 헌신하는 성실한 분위기가 얼굴에 묻어난답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 따뜻하고 온순해서 믿음직하다는 말을 자주 들을 인상이에요.' },
                { title: '분위기', content: '전체적으로 차분하고 성실한 분위기라 곁에 두면 든든한 얼굴이에요.' },
            ],
            closingMessage: '헌신과 성실함이 느껴지는 슬레이브상이에요. 그 정성 알아주는 사람 꼭 만나시길!',
        },
        {
            key: 'pet', name: '펫', accent: '#D97B6C',
            tagline: '애교가 얼굴에서부터 흘러넘치는 관상이에요',
            description: '눈이 동그랗고 표정이 사랑스러워서, 보자마자 예뻐해주고 싶은 인상이에요. 애정 표현에 솔직한 귀여운 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈이 초롱초롱하고 반짝여서 사랑받는 게 익숙한 인상이에요.' },
                { title: '분위기', content: '표정이 사랑스럽고 애교가 많아서 주변을 다 녹이는 분위기를 풍겨요.' },
            ],
            closingMessage: '사랑스러움이 넘치는 펫상이에요. 어딜 가나 예쁨받는 얼굴이네요!',
        },
        {
            key: 'brat', name: '브랫', accent: '#D9636C',
            tagline: '장난기 가득한 눈빛의 관상이에요',
            description: '눈빛에 장난기가 그득하고 입꼬리가 자꾸 씰룩거려서, 한마디 툭 던지고 반응 기다릴 것 같은 인상이에요. 도발적이면서도 사랑스러운 매력이 있답니다.',
            sections: [
                { title: '눈빛', content: '눈매에 장난기가 넘쳐서 자꾸 놀리고 싶게 만드는 인상이에요.' },
                { title: '분위기', content: '표정이 발랄하고 도전적이라 관심을 끄는 재주가 있는 분위기예요.' },
            ],
            closingMessage: '장난기 넘치는 브랫상이에요. 결국 다 받아주게 되는 매력이 있네요!',
        },
        {
            key: 'prey', name: '프레이', accent: '#6C8C5B',
            tagline: '쫓고 싶게 만드는 관상이에요',
            description: '눈빛이 살짝 도망가는 듯하면서도 은근히 시선을 붙잡는 매력이 있는 인상이에요. 잡힐 듯 말 듯한 아슬아슬한 분위기가 얼굴에 있답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 반짝이면서도 살짝 피하는 느낌이 있어서 자꾸 신경 쓰이는 인상이에요.' },
                { title: '분위기', content: '전체적으로 야생적이고 생기 있는 분위기라 활력이 넘쳐 보여요.' },
            ],
            closingMessage: '자꾸 눈길 가는 프레이상이에요. 쫓고 싶게 만드는 재주가 있네요!',
        },
        {
            key: 'servant', name: '서번트', accent: '#5B8C7C',
            tagline: '세심함이 얼굴에 묻어나는 관상이에요',
            description: '눈매가 다정하고 세심해서, 상대가 뭘 필요로 하는지 잘 챙길 것 같은 인상이에요. 정성스럽고 배려심 깊은 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 세심하고 관찰력이 좋아서 작은 변화도 잘 알아챌 인상이에요.' },
                { title: '분위기', content: '전체적으로 다정하고 성실한 분위기라 곁에 두면 편안한 얼굴이에요.' },
            ],
            closingMessage: '세심함과 배려가 돋보이는 서번트상이에요. 챙김받는 사람이 참 행복하겠어요!',
        },
        {
            key: 'rope-bunny', name: '로프버니', accent: '#8C6E5B',
            tagline: '차분한 신비로움이 있는 관상이에요',
            description: '표정이 고요하고 눈빛이 깊어서, 보고 있으면 마음이 차분해지는 인상이에요. 예술적이고 명상적인 분위기가 얼굴에 스며있답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 편안하고 잔잔해서 안정감을 주는 인상이에요.' },
                { title: '분위기', content: '전체적으로 우아하고 정적인 분위기라 그림 같다는 말을 들을 얼굴이에요.' },
            ],
            closingMessage: '차분하고 우아한 로프버니상이에요. 존재만으로도 힐링이 되네요!',
        },
        {
            key: 'little', name: '리틀', accent: '#D9A76C',
            tagline: '순수함이 얼굴에 그대로 드러나는 관상이에요',
            description: '눈이 맑고 표정이 순수해서, 보호본능을 자극하는 인상이에요. 티 없이 해맑은 분위기가 얼굴 전체에 퍼져있답니다.',
            sections: [
                { title: '눈빛', content: '눈이 맑고 순진해서 나이보다 어려 보인다는 말을 자주 들을 인상이에요.' },
                { title: '분위기', content: '전체적으로 순수하고 사랑스러운 분위기라 다들 챙겨주고 싶어하는 얼굴이에요.' },
            ],
            closingMessage: '순수함 가득한 리틀상이에요. 주변에서 알아서 챙겨주는 인복이 있겠어요!',
        },
        {
            key: 'masochist', name: '마조히스트', accent: '#8C4C6E',
            tagline: '묘한 인내심이 느껴지는 관상이에요',
            description: '표정에 여유로운 인내심이 있고 눈빛엔 은근한 열정이 담겨있는 인상이에요. 힘든 상황도 꿋꿋이 버텨낼 것 같은 얼굴이랍니다.',
            sections: [
                { title: '눈빛', content: '눈매에 묘한 열정과 끈기가 담겨있어서 쉽게 포기하지 않을 인상이에요.' },
                { title: '분위기', content: '전체적으로 단단하고 꿋꿋한 분위기라 은근히 근성 있어 보여요.' },
            ],
            closingMessage: '인내심과 열정이 공존하는 마조히스트상이에요. 그 근성 어디서든 통하겠어요!',
        },
        {
            key: 'spankee', name: '스팽키', accent: '#B5636C',
            tagline: '설렘과 긴장을 함께 주는 관상이에요',
            description: '표정에 살짝 긴장한 듯한 설렘이 묻어나는 인상이에요. 기대감 가득한 눈빛이 묘하게 매력적인 얼굴이랍니다.',
            sections: [
                { title: '눈빛', content: '눈빛에 긴장과 설렘이 함께 있어서 다음 반응이 궁금해지는 인상이에요.' },
                { title: '분위기', content: '전체적으로 리액션이 풍부한 분위기라 함께 있으면 재밌는 얼굴이에요.' },
            ],
            closingMessage: '설렘 가득한 스팽키상이에요. 반응 하나하나가 매력 포인트겠네요!',
        },
        {
            key: 'degradee', name: '디그레이디', accent: '#8C5B6E',
            tagline: '수줍음 속 반전이 있는 관상이에요',
            description: '표정이 부끄러움을 잘 타면서도 은근히 그 상황을 즐기는 듯한 인상이에요. 수줍음과 대담함이 공존하는 묘한 매력이 있답니다.',
            sections: [
                { title: '눈빛', content: '눈빛이 살짝 흔들리면서도 피하지 않는 묘한 대담함이 있는 인상이에요.' },
                { title: '분위기', content: '전체적으로 수줍은 듯하면서도 매력적인 반전 분위기를 풍겨요.' },
            ],
            closingMessage: '수줍음과 반전 매력이 공존하는 디그레이디상이에요. 볼수록 신경 쓰이는 얼굴이네요!',
        },
        {
            key: 'princess', name: '프린세스', accent: '#B56FA4',
            tagline: '우아함이 기본값인 관상이에요',
            description: '표정과 자세에서 자연스러운 우아함이 묻어나는 인상이에요. 귀한 대접이 익숙해 보이는 고급스러운 분위기가 있답니다.',
            sections: [
                { title: '눈빛', content: '눈매가 우아하고 자신감 있어서 자연스럽게 시선을 끄는 인상이에요.' },
                { title: '분위기', content: '전체적으로 고급스럽고 품격 있는 분위기라 대접받는 게 잘 어울려요.' },
            ],
            closingMessage: '우아함이 기본인 프린세스상이에요. 오늘도 귀하게 대접받으세요!',
        },
    ];

    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const analyzeBtn = document.getElementById('analyzeBtn');

    const uploadSection = document.getElementById('uploadSection');
    const loadingSection = document.getElementById('loadingSection');
    const resultSection = document.getElementById('resultSection');
    const retryBtn = document.getElementById('retryBtn');
    const saveImageBtn = document.getElementById('saveImageBtn');
    const overallText = document.getElementById('overallText');

    const cropSection = document.getElementById('cropSection');
    const cropBox = document.getElementById('cropBox');
    const cropImage = document.getElementById('cropImage');
    const zoomRange = document.getElementById('zoomRange');
    const cropConfirmBtn = document.getElementById('cropConfirmBtn');
    const cropCancelBtn = document.getElementById('cropCancelBtn');
    const confirmedPreview = document.getElementById('confirmedPreview');
    const confirmedImg = document.getElementById('confirmedImg');
    const changePhotoBtn = document.getElementById('changePhotoBtn');

    let selectedDataUrl = null;
    let lastIndex = -1;

    const BOX_SIZE = 280;
    const OUTPUT_SIZE = 800;
    let crop = null; // { naturalW, naturalH, baseScale, scale, x, y }

    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) handleFile(fileInput.files[0]);
    });

    function handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('이미지 파일만 업로드할 수 있어요.');
            return;
        }
        if (file.size > 15 * 1024 * 1024) {
            alert('파일 용량이 너무 커요. 15MB 이하 사진으로 올려주세요.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                openCropStage(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    function openCropStage(img) {
        const naturalW = img.naturalWidth;
        const naturalH = img.naturalHeight;
        const baseScale = Math.max(BOX_SIZE / naturalW, BOX_SIZE / naturalH);

        crop = { naturalW, naturalH, baseScale, scale: baseScale, x: 0, y: 0 };
        crop.x = (BOX_SIZE - naturalW * crop.scale) / 2;
        crop.y = (BOX_SIZE - naturalH * crop.scale) / 2;

        cropImage.src = img.src;
        zoomRange.value = '1';
        applyCropTransform();

        dropzone.style.display = 'none';
        confirmedPreview.style.display = 'none';
        cropSection.style.display = 'block';
    }

    function clampCropPosition() {
        const dispW = crop.naturalW * crop.scale;
        const dispH = crop.naturalH * crop.scale;
        const minX = BOX_SIZE - dispW;
        const minY = BOX_SIZE - dispH;
        crop.x = Math.min(0, Math.max(minX, crop.x));
        crop.y = Math.min(0, Math.max(minY, crop.y));
    }

    function applyCropTransform() {
        clampCropPosition();
        const dispW = crop.naturalW * crop.scale;
        const dispH = crop.naturalH * crop.scale;
        cropImage.style.width = dispW + 'px';
        cropImage.style.height = dispH + 'px';
        cropImage.style.left = crop.x + 'px';
        cropImage.style.top = crop.y + 'px';
    }

    zoomRange.addEventListener('input', () => {
        const zoom = parseFloat(zoomRange.value);
        const newScale = crop.baseScale * zoom;

        // 박스 중심이 가리키는 원본 이미지 지점을 유지하면서 확대/축소합니다.
        const centerImageX = (BOX_SIZE / 2 - crop.x) / crop.scale;
        const centerImageY = (BOX_SIZE / 2 - crop.y) / crop.scale;

        crop.scale = newScale;
        crop.x = BOX_SIZE / 2 - centerImageX * newScale;
        crop.y = BOX_SIZE / 2 - centerImageY * newScale;

        applyCropTransform();
    });

    let dragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;

    cropBox.addEventListener('pointerdown', (e) => {
        dragging = true;
        cropBox.classList.add('dragging');
        cropBox.setPointerCapture(e.pointerId);
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragOriginX = crop.x;
        dragOriginY = crop.y;
    });

    cropBox.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        crop.x = dragOriginX + (e.clientX - dragStartX);
        crop.y = dragOriginY + (e.clientY - dragStartY);
        applyCropTransform();
    });

    function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        cropBox.classList.remove('dragging');
        if (e && cropBox.hasPointerCapture && cropBox.hasPointerCapture(e.pointerId)) {
            cropBox.releasePointerCapture(e.pointerId);
        }
    }
    cropBox.addEventListener('pointerup', endDrag);
    cropBox.addEventListener('pointercancel', endDrag);

    cropConfirmBtn.addEventListener('click', () => {
        const sx = (0 - crop.x) / crop.scale;
        const sy = (0 - crop.y) / crop.scale;
        const sSize = BOX_SIZE / crop.scale;

        const canvas = document.createElement('canvas');
        canvas.width = OUTPUT_SIZE;
        canvas.height = OUTPUT_SIZE;
        canvas.getContext('2d').drawImage(cropImage, sx, sy, sSize, sSize, 0, 0, OUTPUT_SIZE, OUTPUT_SIZE);
        selectedDataUrl = canvas.toDataURL('image/jpeg', 0.9);

        confirmedImg.src = selectedDataUrl;
        cropSection.style.display = 'none';
        confirmedPreview.style.display = 'block';
        analyzeBtn.disabled = false;
    });

    cropCancelBtn.addEventListener('click', resetToDropzone);
    changePhotoBtn.addEventListener('click', resetToDropzone);

    function resetToDropzone() {
        selectedDataUrl = null;
        crop = null;
        fileInput.value = '';
        cropSection.style.display = 'none';
        confirmedPreview.style.display = 'none';
        dropzone.style.display = 'flex';
        analyzeBtn.disabled = true;
    }

    analyzeBtn.addEventListener('click', () => {
        if (!selectedDataUrl) return;

        uploadSection.style.display = 'none';
        loadingSection.style.display = 'block';

        setTimeout(() => {
            let index = Math.floor(Math.random() * RESULTS.length);
            if (RESULTS.length > 1 && index === lastIndex) {
                index = (index + 1) % RESULTS.length;
            }
            lastIndex = index;

            const result = RESULTS[index];
            loadingSection.style.display = 'none';
            renderResult(result);
            resultSection.style.display = 'block';
        }, 1600);
    });

    function renderResult(result) {
        const captureArea = document.getElementById('captureArea');
        captureArea.style.setProperty('--accent', result.accent);

        document.getElementById('resultPhoto').src = selectedDataUrl;
        document.getElementById('resultBadge').src = 'images/' + result.key + '.png';
        document.getElementById('typeName').textContent = result.name + '상';
        document.getElementById('taglineText').textContent = result.tagline;
        overallText.textContent = result.description;

        const container = document.getElementById('sectionsContainer');
        container.innerHTML = '';
        result.sections.forEach((section) => {
            const item = document.createElement('div');
            item.className = 'result-item';

            const title = document.createElement('h4');
            title.textContent = section.title;

            const content = document.createElement('p');
            content.textContent = section.content;

            item.appendChild(title);
            item.appendChild(content);
            container.appendChild(item);
        });

        document.getElementById('closingMessage').textContent = result.closingMessage;
    }

    saveImageBtn.addEventListener('click', () => {
        const target = document.getElementById('captureArea');
        const originalLabel = saveImageBtn.textContent;
        saveImageBtn.textContent = '저장 중...';
        saveImageBtn.disabled = true;

        html2canvas(target, { scale: 2, backgroundColor: '#ffffff', useCORS: true }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'gwansang-result.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            saveImageBtn.textContent = originalLabel;
            saveImageBtn.disabled = false;
        }).catch((err) => {
            console.error('gwansang 이미지 저장 실패:', err);
            alert('이미지 저장에 실패했어요. 다시 시도해주세요.');
            saveImageBtn.textContent = originalLabel;
            saveImageBtn.disabled = false;
        });
    });

    retryBtn.addEventListener('click', () => {
        resetToDropzone();
        resultSection.style.display = 'none';
        uploadSection.style.display = 'block';
    });
})();
