# web_logo

I implement logo on web. User can input command to let turtle draw a picture.

You can refer https://en.wikipedia.org/wiki/Logo_(programming_language) or http://el.media.mit.edu/logo-foundation/what_is_logo/index.html to understand about Logo.

Now it implement below command:

 	

No   英文指令       英文簡碼     中文        用法舉例                            用法說明
1    FORWARD     FD        前進        FD 100                 前進 100 步
2    BACK        BK        後退        BK 100                 後退 100 步
3    RIGHT       RT        右轉        RT 90                  右轉 90 度
4    LEFT        LT        左轉        LT 90                  左轉 90 度
5    PENUP       PU        提筆        PU                     把筆提起, 不留痕跡
6    PENDOWN     PD        下筆        PD                     把筆放下, 會留痕跡
7    PENERASE    PE        筆擦        PE                     走過的地方會擦去
8    PENNORMAL   PENNORMAL 回復正常 PENNORMAL              回復正常
9    SHOWTURTLE  ST        出現        ST                     顯示小海龜
10   HIDETURTLE  HT        隱形        HT                     不顯示小海龜
11   CLEARSCREEN CS        清除        CS                     清除繪圖區, 小海龜回原點(0,0)
12   CLEANTEXT   CT        清文        CT                     清除文字區
13   CLEAN       CLEAN     清圖        CLEAN                  清除繪圖區, 小海龜留在最後的地方
14   HOME        HOME      回家        HOME                   小海龜回原點(0,0)
15   REPEAT      REPEAT    重複        REPEAT 4[FD 100 RT 90] 重複括弧內指令4次，形成一正方形

其他(海龜)畫圖指令
No   英文指令             英文簡碼        中文                                                                            用法舉例                                          用法說明
1    setpencolor    SETPC       設定畫筆的顏色                                                          setpc [000 000 255]            設定畫筆的顏色為藍色。
2    setscreencolor SETSC       設定螢幕的顏色                                                          setsc [000 255 000]                      設定螢幕的顏色為綠色
3    setfloodcolor  setfc       設定範圍內的底色的顏色，需配合FILL指令填入顏色   SETFC [000 000 255]            設定範圍內的底色的顏色為藍色。
4    FILL           FILL        填入顏色                                                                    FILL                           填入顏色
5    SETPENSIZE     SETPENSIZE  筆粗                                                                           SETPENSIZE [10 20]             將筆粗設為[10 20]點
6    SETHEAD        SETH        定角                                                                           SETH 60                        設定小海龜的角度為60度(0-360)
7    SETPOS         SETPOS      定位                                                                           SETPOS [100 100]               把小海龜定位在座標 (100,100)
8    SETX           SETX        橫座標                                                                       SETX 100                       把小海龜定位在橫座標(100,Y)
9    SETY           SETY        縱座標                                                                       SETY 100                       把小海龜定位在縱座標(X,100)
10   LABEL          LABEL       印字                                                                          LABEL "HI                      在繪圖區印出字串"HI"
11   SOUND          SOUND       聲音                                                                          SOUND[262 100]                 發出DO的聲音

    進階（程式設計）指令介紹
	
英文指令 英文簡碼 中文指令
	
用法舉例
	
用法說明
1
	
TO
	
TO
	
定義
	
TO BBB
	
定義程序 BBB
2
	
END
	
END
	
結束
	
END
	
程序定義結束
3
	
PRINT
	
PR
	
印出
	
PR "HI
	
在文字區印出字串"HI"
4
	
WHILE
	
While
	
當
	
make "i 0
while [:i<3] [make "i :i+1 print :i]
	
Ｗhile 決策迴圈
5
	
IFELSE
	
IfElse
	
假如～否則
	
ifelse 1=1 [print [Yes it is true]] [print [No it is false]]
	
IF ~ ELSE 決策指令
6
	
STOP
	
STOP
	
停止
		
跳離程序(常配合IF ~ ELSE)
7
	
MESSA
GEBOX
	
MESSA
GEBOX
	
訊息
	
MESSAGEBOX [This is the banner] [This is the body]
	
提示訊息
8
	
TRUE
	
TRUE
	
真
	
TRUE
	
9
	
FALSE
	
FALSE
	
假
	
FALSE
	
10
	
XCOR
	
XCOR
	
橫座標的值
	
XCOR
	
11
	
YCOR
	
YCOR
	
縱座標的值
	
YCOR
	
12
	
PI
	
PI
	
圓周率
	
PI
	
13
	
SQRT
	
SQRT
	
開平方根
	
SQRT 4
	
14
	
RANDOM
	
RANDOM
	
取亂數
	
RANDOM 100
	
15
	
EXP
	
EXP
	
指數
	
EXP 1
	
16
	
SIN
	
SIN
	
正弦
	
SIN 90
	
17
	
COS
	
COS
	
餘弦
	
COS 90
	
18
	
FIRST
	
FIRST
	
字首
	
PR FIRST "HELLO
	
顯示 "HELLO 的字首 H
19
	
BUTFIRST
	
BF
	
去首
	
PR BF "HELLO
	
顯示 "HELLO 的去首字串 ELLO
20
	
LAST
	
LAST
	
字尾
	
PR LAST "HELLO
	
顯示 "HELLO 的字尾 O
21
	
BUTLAST
	
BL
	
去尾
	
PR BL "HELLO
	
顯示 "HELLO 的去尾字串 HELL
22
	
POTS
	
POTS
		
POTS
	
顯示程序抬頭
23
	
PO
	
PO
		
PO AAA
	
顯示 AAA 程序內容
24
	
ERALL
	
ERALL
		
ERALL
	
刪除所有程序
25
	
ERASE
	
ER
		
ER AAA
	
刪除程序AAA
26
	
EDIT
	
ED
	
編輯
	
ED AAA
	
編輯程序 AAA
27
	
LOAD
	
LOAD
	
取檔
	
LOAD "AAA.LGO
	
開啟檔案 AAA.LGO
28
	
SAVE
	
SAVE
	
存檔
	
SAVE "AAA.LGO
	
儲存檔案 AAA.LGO