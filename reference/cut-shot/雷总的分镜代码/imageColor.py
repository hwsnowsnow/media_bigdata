import numpy as np
from scipy.cluster.vq import vq,kmeans,whiten
import matplotlib.pyplot as plt
import os
from PIL import Image
#os.chdir("/Users/lrlbabee/Desktop/CUC/大三下/媒体大数据/pic")
print(os.getcwd())
#im = np.array(Image.open('sw1.jpeg'))
#用缩略图聚类
def colorz(filename,n=3):
    img=Image.open(filename)
    #img=img.rotate(-90)
    img.thumbnail((200,200))
    w,h=img.size
    print(w,h) 
    print('w*h=',w*h)
    #plt.axis('off')
    #plt.imshow(img)
    #plt.show()
    points=[]
    for count,color in img.getcolors(w*h):
        points.append(color)
    return points

def kmeansColor(data,n):    
    '''data=np.array(data,dtype=float)  #聚类需要是Float或者Double    
    center_init = np.array(data[0:n])   #初始聚类中心    
    print(type(center_init))    
    print(type(center_init))       
    print("Center_init: \n",center_init)    
    centers, loss = kmeans(data, n) #   n是聚类中心个数    
    # 可以写kmeans(wf,2)， 2表示两个质心，同时启用iter参数    
    print("Centers:", centers)    
    print("Loss: ", loss)    
    plt.scatter(data[:,0], data[:,1], c='g')
    plt.scatter(centers[:, 0], centers[:, 1], c='r')    
    plt.show()'''
    points=colorz(data,3)
    fe=np.array(points,dtype=float)
    codebook,distortion=kmeans(fe,n)
    centers=np.array(codebook,dtype=int)
    return centers
#imgdata=colorz("sw1.jpeg")
#print(kmeansColor("/Users/lrlbabee/Desktop/CUC/大三下/媒体大数据/adsFlask/static/aHash/image344.jpg",5))
#print(kmeansColor("/Users/lrlbabee/Desktop/CUC/大三下/媒体大数据/adsFlask/static/aHash/image1623.jpg",5))
