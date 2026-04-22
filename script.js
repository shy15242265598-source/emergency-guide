// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    initCarousel();
});

// 初始化轮播图
function initCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    let currentIndex = 0;
    const itemCount = carouselItems.length;
    
    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }, 3000);
    
    // 更新轮播图状态
    function updateCarousel() {
        // 更新轮播图位置
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}

// 切换页面
function switchPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 更新底部导航栏状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 根据页面ID激活对应的导航项
    if (pageId === 'home-page') {
        document.querySelectorAll('.nav-item')[0].classList.add('active');
    } else if (pageId === 'vr-page') {
        document.querySelectorAll('.nav-item')[1].classList.add('active');
    } else if (pageId === 'mine-page') {
        document.querySelectorAll('.nav-item')[2].classList.add('active');
    }
}

// 游戏关卡数据
const levelData = {
    earthquake: {
        name: '地震安全',
        questions: [
            {
                question: '地震发生时，下列哪种做法是正确的？',
                options: ['立即跳楼逃生', '躲在桌子底下', '乘电梯下楼', '站在窗户边'],
                correctAnswer: 1,
                explanation: '正确做法是躲在桌子等坚固家具底下，保护头部免受伤害。'
            },
            {
                question: '地震发生后，下列哪种做法是错误的？',
                options: ['检查是否有人员受伤', '关闭电源和燃气', '立即返回建筑物拿取财物', '远离建筑物和电线杆'],
                correctAnswer: 2,
                explanation: '地震后建筑物可能存在安全隐患，不应立即返回拿取财物。'
            },
            {
                question: '在户外遇到地震时，应该怎么做？',
                options: ['跑向建筑物寻求庇护', '躲在大树下', '远离建筑物、电线杆和广告牌', '站在原地不动'],
                correctAnswer: 2,
                explanation: '在户外应远离建筑物、电线杆和广告牌等可能倒塌的物体。'
            }
        ]
    },
    fire: {
        name: '火灾安全',
        questions: [
            {
                question: '发生火灾时，下列哪种做法是正确的？',
                options: ['乘坐电梯逃生', '用湿毛巾捂住口鼻', '打开门窗通风', '使用明火照明'],
                correctAnswer: 1,
                explanation: '用湿毛巾捂住口鼻可以防止吸入有毒烟雾。'
            },
            {
                question: '灭火器的正确使用步骤是？',
                options: ['拔下保险销→对准火源→按下压把→左右扫射', '对准火源→拔下保险销→按下压把→左右扫射', '按下压把→拔下保险销→对准火源→左右扫射', '拔下保险销→按下压把→对准火源→左右扫射'],
                correctAnswer: 3,
                explanation: '正确步骤是：拔下保险销→按下压把→对准火源→左右扫射。'
            },
            {
                question: '当衣服着火时，应该怎么做？',
                options: ['快速奔跑', '用手拍打', '就地打滚', '跳进水中'],
                correctAnswer: 2,
                explanation: '就地打滚可以压灭火焰，避免火势蔓延。'
            },
            {
                question: '发生火灾时，如果逃生通道被烟雾阻挡，应该怎么做？',
                options: ['强行通过', '返回房间等待救援', '从窗户跳下', '使用绳索下滑'],
                correctAnswer: 1,
                explanation: '如果逃生通道被烟雾阻挡，应返回房间，关闭门窗，用湿布堵塞门缝，等待救援。'
            }
        ]
    },
    aed: {
        name: 'AED使用',
        questions: [
            {
                question: 'AED的全称是什么？',
                options: ['自动体外除颤器', '心脏起搏器', '急救呼吸器', '血压监测仪'],
                correctAnswer: 0,
                explanation: 'AED的全称是自动体外除颤器（Automated External Defibrillator）。'
            },
            {
                question: '使用AED时，应该将电极片放在患者的哪个位置？',
                options: ['胸部左侧和右侧', '胸部左侧和背部', '胸部右侧和背部', '胸部上方和下方'],
                correctAnswer: 0,
                explanation: 'AED电极片应放在患者胸部左侧和右侧。'
            },
            {
                question: '在使用AED时，下列哪种做法是正确的？',
                options: ['在患者身上有汗水时直接使用', '在患者躺在水中时使用', '在有人接触患者时使用', '按照AED语音提示操作'],
                correctAnswer: 3,
                explanation: '使用AED时应按照语音提示操作，确保安全。'
            },
            {
                question: 'AED主要用于治疗哪种心脏问题？',
                options: ['心动过缓', '心肌梗死', '心室颤动', '心力衰竭'],
                correctAnswer: 2,
                explanation: 'AED主要用于治疗心室颤动，这是一种致命的心律失常。'
            },
            {
                question: '在使用AED前，应该怎么做？',
                options: ['先进行心肺复苏', '先检查患者呼吸', '先拨打急救电话', '先给患者服用药物'],
                correctAnswer: 2,
                explanation: '在使用AED前，应先拨打急救电话，然后再进行操作。'
            }
        ]
    },
    cpr: {
        name: '心肺复苏',
        questions: [
            {
                question: '心肺复苏的正确按压部位是？',
                options: ['胸部左侧', '胸部右侧', '两乳头连线中点', '胸骨上缘'],
                correctAnswer: 2,
                explanation: '心肺复苏的正确按压部位是两乳头连线中点。'
            },
            {
                question: '心肺复苏的按压频率是多少？',
                options: ['60-80次/分钟', '80-100次/分钟', '100-120次/分钟', '120-140次/分钟'],
                correctAnswer: 2,
                explanation: '心肺复苏的按压频率是100-120次/分钟。'
            },
            {
                question: '心肺复苏的按压深度是多少？',
                options: ['2-3厘米', '3-4厘米', '4-5厘米', '5-6厘米'],
                correctAnswer: 3,
                explanation: '心肺复苏的按压深度是5-6厘米。'
            },
            {
                question: '心肺复苏时，按压与通气的比例是多少？',
                options: ['15:2', '30:2', '10:1', '20:1'],
                correctAnswer: 1,
                explanation: '心肺复苏时，按压与通气的比例是30:2。'
            }
        ]
    }
};

// 当前游戏状态
let currentLevel = null;
let currentQuestionIndex = 0;

// 开始关卡
function startLevel(levelId) {
    currentLevel = levelData[levelId];
    currentQuestionIndex = 0;
    
    // 切换到答题页面
    switchPage('quiz-page');
    
    // 加载第一道题目
    loadQuestion();
}

// 加载题目
function loadQuestion() {
    const question = currentLevel.questions[currentQuestionIndex];
    const quizQuestion = document.querySelector('.quiz-question');
    const quizFeedback = document.querySelector('.quiz-feedback');
    const quizComplete = document.querySelector('.quiz-complete');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    // 显示题目，隐藏反馈和完成页面
    quizQuestion.style.display = 'block';
    quizFeedback.style.display = 'none';
    quizComplete.style.display = 'none';
    
    // 更新进度条
    const progress = ((currentQuestionIndex + 1) / currentLevel.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${currentLevel.questions.length}`;
    
    // 更新题目内容
    quizQuestion.querySelector('h2').textContent = `问题：${question.question}`;
    
    // 更新选项
    const optionsContainer = quizQuestion.querySelector('.quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        optionItem.onclick = () => selectOption(index);
        optionItem.innerHTML = `
            <span class="option-radio"></span>
            <span class="option-text">${option}</span>
        `;
        optionsContainer.appendChild(optionItem);
    });
}

// 选择选项
function selectOption(index) {
    const question = currentLevel.questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-item');
    const quizQuestion = document.querySelector('.quiz-question');
    const quizFeedback = document.querySelector('.quiz-feedback');
    const feedbackIcon = quizFeedback.querySelector('.feedback-icon');
    const feedbackText = quizFeedback.querySelector('.feedback-text');
    const feedbackExplanation = quizFeedback.querySelector('.feedback-explanation');
    
    // 禁用所有选项
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // 标记选中的选项
    options[index].classList.add('selected');
    
    // 检查答案
    if (index === question.correctAnswer) {
        // 答对了
        feedbackIcon.className = 'feedback-icon correct';
        feedbackIcon.textContent = '✓';
        feedbackText.textContent = '回答正确！';
    } else {
        // 答错了
        feedbackIcon.className = 'feedback-icon incorrect';
        feedbackIcon.textContent = '✗';
        feedbackText.textContent = '回答错误！';
    }
    
    // 显示解释
    feedbackExplanation.textContent = question.explanation;
    
    // 显示反馈
    setTimeout(() => {
        quizQuestion.style.display = 'none';
        quizFeedback.style.display = 'flex';
    }, 500);
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentLevel.questions.length) {
        // 加载下一题
        loadQuestion();
    } else {
        // 完成所有题目
        const quizFeedback = document.querySelector('.quiz-feedback');
        const quizComplete = document.querySelector('.quiz-complete');
        
        quizFeedback.style.display = 'none';
        quizComplete.style.display = 'flex';
    }
}

// AI问答数据
const aiResponses = {
    '止血': '止血的基本方法：1. 直接压迫法：用干净的纱布或毛巾直接按压伤口；2. 抬高受伤部位；3. 如果伤口在四肢，可以使用止血带，但注意每隔15-20分钟放松一次。',
    '包扎': '包扎的基本步骤：1. 清洁伤口；2. 用无菌纱布覆盖伤口；3. 用绷带或三角巾固定纱布；4. 注意包扎的松紧度，不要过紧影响血液循环。',
    '烫伤': '烫伤的处理方法：1. 立即用流动的冷水冲洗烫伤部位15-20分钟；2. 不要挑破水泡；3. 用干净的纱布覆盖伤口；4. 严重烫伤应立即就医。',
    '溺水': '溺水的急救方法：1. 立即将溺水者救上岸；2. 检查呼吸和心跳；3. 如果没有呼吸和心跳，立即进行心肺复苏；4. 清除口腔异物，保持呼吸道通畅。',
    '心肺复苏': '心肺复苏的步骤：1. 检查意识和呼吸；2. 拨打急救电话；3. 进行胸外按压，频率100-120次/分钟，深度5-6厘米；4. 每30次按压后进行2次人工呼吸；5. 持续进行直到急救人员到达。',
    'AED': 'AED的使用步骤：1. 打开AED电源；2. 按照语音提示将电极片贴在患者胸部；3. 确保所有人远离患者；4. 按下电击按钮（如果AED建议电击）；5. 继续进行心肺复苏。',
    '海姆立克': '海姆立克急救法：1. 站在患者背后，环抱患者腰部；2. 一手握拳，拇指侧顶住患者上腹部；3. 另一手握住握拳的手，快速向上向后冲击；4. 重复直到异物排出。',
    '地震': '地震时的应对措施：1. 在室内：躲在桌子等坚固家具底下，保护头部；2. 在室外：远离建筑物、电线杆和广告牌；3. 地震后：检查是否有人员受伤，关闭电源和燃气，远离建筑物。',
    '火灾': '火灾时的逃生方法：1. 用湿毛巾捂住口鼻，弯腰低姿前行；2. 不要乘坐电梯，使用楼梯；3. 如逃生通道被烟雾阻挡，返回房间等待救援；4. 关闭门窗，用湿布堵塞门缝。'
};

// 发送消息
function sendMessage() {
    const input = document.getElementById('ai-input');
    const message = input.value.trim();
    
    if (message) {
        // 添加用户消息
        addMessage('user', message);
        
        // 清空输入框
        input.value = '';
        
        // 模拟AI思考
        setTimeout(() => {
            // 生成AI回复
            let response = '抱歉，我不太理解你的问题。你可以问我关于止血、包扎、烫伤、溺水、心肺复苏、AED、海姆立克、地震或火灾的问题。';
            
            // 检查是否有匹配的关键词
            for (const keyword in aiResponses) {
                if (message.includes(keyword)) {
                    response = aiResponses[keyword];
                    break;
                }
            }
            
            // 添加AI回复
            addMessage('ai', response);
        }, 1000);
    }
}

// 添加消息
function addMessage(type, content) {
    const chatContainer = document.querySelector('.chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}-message`;
    
    if (type === 'ai') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20assistant%20avatar%20icon&image_size=square" alt="AI">
            </div>
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20icon&image_size=square" alt="User">
            </div>
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;
    }
    
    chatContainer.appendChild(messageDiv);
    
    // 滚动到底部
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 清空聊天
function clearChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.innerHTML = `
        <div class="chat-message ai-message">
            <div class="message-avatar">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20assistant%20avatar%20icon&image_size=square" alt="AI">
            </div>
            <div class="message-content">
                <p>你好！我是AI安全顾问，有什么急救问题可以问我。</p>
            </div>
        </div>
    `;
}

// 视频数据
const videoData = [
    {
        title: 'AED使用指南',
        description: '学习如何正确使用自动体外除颤器，关键时刻挽救生命',
        url: 'videos/aed-usage.mp4'
    },
    {
        title: '海姆立克急救法',
        description: '应对呼吸道异物阻塞的紧急处理方法，简单有效',
        url: 'videos/heimlich.mp4'
    },
    {
        title: '心肺复苏术',
        description: '掌握基本的心肺复苏技能，为生命争取宝贵时间',
        url: 'videos/cpr.mp4'
    },
    {
        title: '创伤处理',
        description: '常见创伤的应急处理方法，减轻伤害程度',
        url: 'videos/wound-treatment.mp4'
    }
];

// 播放视频
function playVideo(index) {
    const video = videoData[index];
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    
    // 更新视频信息
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
    videoPlayer.src = video.url;
    
    // 切换到视频播放页面
    switchPage('video-player-page');
    
    // 播放视频
    videoPlayer.play();
}

// 显示提示框
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastContent = toast.querySelector('.toast-content');
    
    // 设置提示信息
    toastContent.textContent = message;
    
    // 显示提示框
    toast.classList.add('show');
    
    // 2秒后隐藏提示框
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 为所有可点击元素添加点击效果
document.addEventListener('DOMContentLoaded', function() {
    const clickableElements = document.querySelectorAll('.button-item, .knowledge-item, .vr-item, .menu-item');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            // 添加点击动画效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// 显示急救视频模态框
function showFirstAidVideo() {
    document.getElementById('first-aid-modal').style.display = 'block';
}

// 关闭急救视频模态框
function closeFirstAidVideo() {
    document.getElementById('first-aid-modal').style.display = 'none';
    // 暂停视频播放
    const video = document.getElementById('first-aid-video');
    if (video) {
        video.pause();
    }
}

// 切换急救视频
function changeFirstAidVideo(videoUrl) {
    const video = document.getElementById('first-aid-video');
    const source = video.querySelector('source');
    source.src = videoUrl;
    video.load();
    video.play();
}