import AppFunctions from '../helpers/AppFunctions'

export default {
    data() {
        return {
            posts: [
                {
                    id: '1',
                    img: require(`@/assets/images/blog/blog-01.jpg`),
                    author: 'Irin Pervin',
                    authorId: '1',
                    view: '70 views',
                    publishedAt: '10 Dec 2022',
                    title: 'test',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>这些鱼放哪里
                    来啦 
                    是啊
                    刘子佩帮我
                    哦
                    喂 那事我可以做吗
                    你们俩说啥呢 
                    快点过来 
                    你干什么呢 
                    我说没见过家里养鲨鱼的
                    要不然说什么是有钱人的
                    我姑妈说了 养鲨鱼可以改命呢
                    我就不信了 那我养十条咯
                    我不信这些玩意
                    我只信我自己
                    我也信你</p>
                    
                    <p>这边</p>
                    
                    <p>上来啊</p>
                    
                    <p>豪哥
                    下次机灵点
                    知道
                    喂 阿豪
                    哇 新女朋友啊</p>
                    
                    <p>你瞎说什么呢
                    哇 好小啊</p>
                    
                    <p>外面捡的吗
                    下次带我一起捡啊
                    捡货吧你 再慢一点你就要被捡骨头了
                    先坐下吧
                    开单
                    30个空盒对吧
                    过春天告诉你
                    自己小心点
                    我也信你
                    要不要帮忙
                    当心点啊 看你样子好像好累啊
                    成天在外面东跑西颠的 哪像你啊这么舒服
                    你喜欢什么样的 我喜欢成熟的
                    说什么呢 没事 没事
                    什么成熟啊
                    我说我喜欢鸡蛋炒得熟一点
                    阿七说他要吃老蛋 好
                    喂 刘子佩
                    花姐
                    花姐好
                    花姐好
                    肚子饿了</p>
                    
                    <p>来 吃鸡
                    光吃块鸡</p>
                    
                    <p>今天有答人在 没规没矩</p>
                    
                    <p>你不用理他们 
                    随便夹菜啊 不要客气</p>
                    
                    <p>杰哥 今晚菜好像不是很够啊 </p>
                    
                    <p>本来是够的</p>
                    
                    <p>谁知道阿豪突然又带多了一位姑娘来</p>
                    
                    <p>难怪 我那碟黄瓜呢</p>
                    
                    <p>黄瓜没洗就被他干掉啦 
                    阿豪贪吃啊   </p>
                    
                    <p>好好笑啊四眼仔
                    上礼拜也不觉你这么开心 怂了
                    如果不是这姑娘 
                    我四部机就没了 </p>
                    
                    <p>四眼哥 
                    多谢人家啦 
                    花姐 这次是我不对</p>
                    
                    <p>吃个菜 不要生我的气啊</p>
                    
                    <p>喂 杰哥 这鸡蛋很老啊
                    你自己刚说要老蛋啊 </p>
                    
                    <p>成熟的蛋啊 卤水蛋啊
                    你今晚要吃不完就是不给杰哥面子</p>
                    
                    <p>小妹拿什么证件的 
                    香港身份证 住深圳的 
                    单非仔 很方便的 </p>
                    
                    <p>你改名叫小妹吗
                    怎么你回答我啊 
                    她是你女朋友啊</p>
                    
                    <p>今天不是明天也是 
                    已经是啦 已经是啦 </p>
                    
                    <p>你怎么知道 我干妹妹啊
                    你两礼拜前 什么Amy 什么Bobo</p>
                    
                    <p>等等 你叫什么来着 
                    我叫 
                    没关系
                    是女的都叫嫂子 </p>
                    
                    <p>小妹 你知不知道我们是干嘛的
                    那你以前带过没</p>
                    
                    <p>那你以前带过没
                    没事的花姐
                    她帮他补过窟窿 聪明的 </p>
                    
                    <p>买鱼买送嘴啊
                    花姐说你多嘴啊
                    多吃一块鱼啦 
                    夹给我 
                    很好笑吗
                    我真的叫你带货
                    你被海关抓进去搜身 
                    你怕不柏
                    我每天都经过
                    应该没问题吧
                    真的OK</p>
                    
                    <p>拉这么久
                    吃了脏的黄瓜呗
                    等一下带货被人抓往了
                    你怎么看都要说是自己的
                    说老爸老妈姨妈表姐表弟 什么都好啦
                    就说是自己用的如果真的被人抓往的话
                    记住把海关单字拿回来 不然我就揍你
                    并玩笑的 我怎么可能揍你 最多没钱罢了</p>
                    
                    <p>身份证 
                    刘子佩
                    十六岁卜卜脆
                    眼镜仔 拿一部iPhone来</p>`,
                    categories: ['Development', 'Company', 'Marketing'],
                    tags: ['Corporate', 'Agency', 'Creative', 'Design']
                },
                {
                    id: '2',
                    img: require(`@/assets/images/blog/blog-02.jpg`),
                    author: 'Fatima Asrafy',
                    authorId: '2',
                    view: '70 views',
                    publishedAt: '30 Nov 2022',
                    title: 'Should Fixing Corporate Take 100 Steps.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>OK 收到
                    KB啊 下楼开车等我 
                    哦 收到</p>
                    
                    <p>哇 这么丑 你整容啦 
                    又不是是你女友 是他干妹啊
                    阿豪的独特口味 </p>
                    
                    <p>怎么样搞掂没 搞掂了
                    给了她几部啊 给了她一部iPhone
                    给多一部给她吧
                    哦 好吧
                    多谢花姐</p>
                    
                    <p>搞掂就下来吧
                    收到
                    花姐要走了吗-是啊
                    眼镜仔-听到了</p>
                    
                    <p>一会拿着这个货单去这个地址
                    过了海关之后去这个地址 
                    小心点</p>
                    
                    <p>佩佩姐姐 吓到你了吗
                    是跟你说要讲粤语吗
                    这里都已经过了香港啦
                    吃披萨 吃披萨 好</p>
                    
                    <p>佩佩 今天怎么这么晚啊
                    佩佩 我们走了啊 拜拜</p>
                    
                    <p>喂美女 一个人吗
                    叫什么名字啊</p>
                    
                    <p>水哥 我老板说
                    下次要冷链才行哦
                    什么冷链
                    跟你老板说 我车里冷气好得很</p>
                    
                    <p>你打电话啊
                    货
                    单子
                    啊
                    七仔没给你单子啊
                    哦 给了
                    要不是因为你 我早收工了
                    下次早点</p>`,
                    categories: ['UX Design', 'Company'],
                    tags: ['Minimal', 'Company', 'Development', 'Design']
                },
                {
                    id: '3',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: 'John Dou',
                    authorId: '3',
                    view: '70 views',
                    publishedAt: '12 Oct 2022',
                    title: 'The Next 100 Things To Immediately Do About.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Development', 'UX Design', 'Business', 'Company'],
                    tags: ['App Landing', 'Startup', 'Development', 'Design']
                },
                {
                    id: '4',
                    img: require(`@/assets/images/blog/blog-04.jpg`),
                    author: 'Jannin',
                    authorId: '4',
                    view: '70 views',
                    publishedAt: '25 Aug 2022',
                    title: 'Top 5 Lessons About Corporate To Learn Before.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Marketing', 'UX Design', 'Business'],
                    tags: ['App', 'Business', 'Software', 'Design']
                },
                {
                    id: '5',
                    img: require(`@/assets/images/blog/blog-05.jpg`),
                    author: 'Jannin',
                    authorId: '5',
                    view: '70 views',
                    publishedAt: '23 Jul 2022',
                    title: 'Master The Art Of Corporate With These 5 Tips.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['App Development', 'UX Design', 'Application', 'Art'],
                    tags: ['Company', 'Corporate', 'Development', 'Design']
                },
                {
                    id: '6',
                    img: require(`@/assets/images/blog/blog-06.jpg`),
                    author: 'John Dou',
                    authorId: '6',
                    view: '70 views',
                    publishedAt: '30 Jun 2022',
                    title: 'Corporate Is Your Worst Enemy. 5 Ways To Defeat It.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Application', 'UX Design', 'Art'],
                    tags: ['App', 'Landing', 'Design', 'Software']
                },
                {
                    id: '7',
                    img: require(`@/assets/images/blog/blog-02.jpg`),
                    author: 'Fatima Asrafy',
                    authorId: '2',
                    view: '70 views',
                    publishedAt: '30 Nov 2022',
                    title: 'Should Fixing Corporate Take 100 Steps.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['UX Design', 'Company'],
                    tags: ['Minimal', 'Company', 'Development', 'Design']
                },
                {
                    id: '8',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: 'John Dou',
                    authorId: '3',
                    view: '70 views',
                    publishedAt: '12 Oct 2022',
                    title: 'The Next 100 Things To Immediately Do About.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Development', 'UX Design', 'Business', 'Company'],
                    tags: ['App Landing', 'Startup', 'Development', 'Design']
                }
            ],
            categories: '',
            tags: '',
            AppFunctions
        }
    },
    methods: {
        blogCategories() {
            let cats = this.posts.map(item => {
                    return item.categories;
                }),
                singleCatArray = AppFunctions.flatDeep(cats),
                categories = [];

            singleCatArray.forEach(cat => {
                const obj = {
                    title: cat.trim(),
                    slug: AppFunctions.slugify(cat),
                    count: 1
                }
                const objIndex = AppFunctions.containsObject(obj, categories);
                if (objIndex !== -1) {
                    const prevCount = categories[objIndex].count;
                    categories[objIndex] = {
                        title: cat.trim(),
                        slug: AppFunctions.slugify(cat),
                        count: prevCount + 1
                    }
                } else {
                    categories.push(obj);
                }
            });

            this.categories = categories;
        },
        blogTags() {
            let tags = this.posts.map(item => {
                    return item.tags;
                }),
                singleTagArray = AppFunctions.flatDeep(tags),
                tagsData = [];

            singleTagArray.forEach(tag => {
                const obj = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    },
                    objIndex = AppFunctions.containsObject(obj, tagsData);

                if (objIndex !== -1) {
                    tagsData[objIndex] = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    }
                } else {
                    tagsData.push(obj);
                }
            });

            this.tags = tagsData;
        }
    },
    created() {
        this.blogCategories();
        this.blogTags();
    }
}