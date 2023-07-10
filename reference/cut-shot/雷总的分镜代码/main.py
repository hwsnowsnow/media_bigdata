from flask import Flask,render_template,request
import os
import cv2
import face_recognition as fr
import matplotlib.pyplot as plt
import re
from fx import aHash,cmpHash,dHash,pHash,calculate,classify_hist_with_split
import imageColor
app = Flask(__name__)
#print(app.static_folder)

def genFrame():
    v_path='/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/video/001mp4'
    image_save='/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/pic'

    #if not(os.path.exists(image_save)):
    #    os.mkdir(image_save)
    
    cap=cv2.VideoCapture(v_path)
    fc=int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    count=0

    '''for i in range(int(fc)):
        _,img=cap.read()
        cv2.imwrite('媒体大数据/adsFlask/static/pic/image{}.jpg'.format(i),img)'''
    
    img1=cv2.imread('/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/pic/image{}.jpg'.format(0)) 
    cv2.imwrite('/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/pHash/image{}.jpg'.format(0),img1)
    

    for i in range(fc):
        img2=cv2.imread('/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/pic/image{}.jpg'.format(i)) 
        hash1=pHash(img1)
        #print(hash1)
        hash2=pHash(img2)
        #print(hash2)
        n=cmpHash(hash1,hash2)
        #n=classify_hist_with_split(img1,img2)

        if(n<0.4):
            cv2.imwrite('/Users/zhourui/coding/py/venv/my/cv2/大作业/cut/pHash/image{}.jpg'.format(i),img2)
            img1=img2
            #count=count+1
        #print(count)
    return fc
#@app.route('/')
#def index():
#    return render_template('frame.html')
'''@app.template_filter('regex_search')
def regex_search(value, pattern):
    match = re.search(pattern, value)
    return match.group() if match else None'''


@app.route('/')
def index(imageIndex=None):
    
    #fc=genFrame()
    
    #imageIndex=request.args.get(imageIndex)
    pic='static/pic/image'
    aPath='媒体大数据/adsFlask/static/pHash'
    aFilename=[filename for filename in os.listdir(aPath) if filename != '.DS_Store']
    aPath='/static/pHash'
    path='媒体大数据/adsFlask/static/pHash'
    aFramecount=len(aFilename)
    aFilename.sort(key=lambda x:int(x[5:-4]))
    #findex=aFilename[5:-4]
    # 根据传递的图片索引或名称获取对应的路径
    selected_image = os.path.join('/image',imageIndex,'.jpg') if imageIndex is not None else aFilename[0]
    #selected_image = aFilename[image_index] if image_index is not None else aFilename[0]
    image_path = os.path.join(aPath, selected_image)
    print("Received image index: " + imageIndex) if imageIndex is not None else aFilename[0]
    #imgcolors=imageColor.kmeansColor('媒体大数据/adsFlask/static/aHash/image0.jpg',5)
    # 调用色彩聚类函数获取相应的结果
    imgcolors = imageColor.kmeansColor(os.path.join(path, selected_image), 5)
    #print(imgcolors)
    return render_template('frame.html',pic1=pic,framecount=aFramecount,imgcolors=imgcolors,aPath=aPath,aFilename=aFilename,selected_image=selected_image,imageIndex=imageIndex)



if "__main__"==__name__:
    app.run(port='5008')