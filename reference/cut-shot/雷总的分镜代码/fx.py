import os
import cv2
import subprocess
import operator
from PIL import Image
import numpy as np
import hashlib
import inspect
import matplotlib.pyplot as plt

def cmpHash(hash1,hash2):
    n=0
    #hash长度不同则返回-1代表传参出错
    if len(hash1)!=len(hash2):
        return -1
    #遍历判断
    for i in range(len(hash1)):
        #相等则n计数+1，n最终为相似度，1->完全相同，0->完全不同
        if hash1[i]==hash2[i]:
            n=n+1
    n=n/len(hash1)
    return n

    #均值哈希算法
def aHash(img):
    #缩放为8*8
    img=cv2.resize(img,(8,8))

    #转换为灰度图
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    #s为像素和初值为0，hash_str为hash值初值为''
    s=0
    hash_str=''
    #遍历累加求像素和
    for i in range(8):
        for j in range(8):
            s=s+gray[i,j]
    #求平均灰度
    avg=s/64
    #灰度大于平均值为1相反0生成图片的hash值
    for i in range(8):
        for j in range(8):
            if gray[i,j]>avg:
                hash_str=hash_str+'1'
            else:
                hash_str=hash_str+'0'
    return hash_str

#差值感知算法
def dHash(img):
    #缩放8*8
    img=cv2.resize(img,(9,8))
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    hash_str=''
    #每行前一个像素大于后一个像素为1，相反为0，生成哈希
    for i in range(8):
        for j in range(8):
            if gray[i,j]>gray[i,j+1]:
                hash_str=hash_str+'1'
            else:
                hash_str=hash_str+'0'
    return hash_str

#感知哈希算法
def pHash(img):
    #缩放32*32
    img = cv2.resize(img,(32,32))
    #转换灰度图
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    #灰度图转浮点型，dct变换
    dct=cv2.dct(np.float32(gray))
    #opencv掩码
    dct_roi=dct[0:8,0:8]

    hash = []
    average=np.mean(dct_roi)
    for i in range(dct_roi.shape[0]):
        for j in range(dct_roi.shape[1]):
            if dct_roi[i,j]>average:
                hash.append(1)
            else:
                hash.append(0)
    return hash

#计算单通道的直方图的相似值
def calculate(image1,image2):
    hist1=cv2.calcHist([image1],[0],None,[256],[0.0,255.0])
    hist2=cv2.calcHist([image2],[0],None,[256],[0.0,255.0])
    #plt.plot(hist1,color="r")
    #plt.plot(hist2,color="g")
    #plt.show()

    #计算直方图的重合度
    degree=0
    for i in range(len(hist1)):
        if hist1[i]!=hist2[i]:
            degree=degree+(1-abs(hist1[i]-hist2[i])/max(hist1[i],hist2[i]))
        else:
            degree=degree+1
    degree=degree/len(hist1)
    return degree

def classify_hist_with_split(image1,image2,size=(256,256)):
    #将图像resize后，分离为RGB3个通道，再计算每个通道的相似值
    image1=cv2.resize(image1,size)
    image2=cv2.resize(image2,size)
    '''plt.imshow(image1)
    plt.show()
    plt.axis('off')

    plt.imshow(image2)
    plt.show()
    plt.axis('off')'''

    sub_image1=cv2.split(image1)
    sub_image2=cv2.split(image2)
    sub_data=0

    for im1,im2 in zip(sub_image1,sub_image2):
        sub_data+=calculate(im1,im2)
    sub_data = sub_data/3
    return sub_data