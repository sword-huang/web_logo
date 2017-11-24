# Web Logo

I implement Logo on web. User can input command to let turtle draw a picture.

You can refer https://en.wikipedia.org/wiki/Logo_(programming_language) or http://el.media.mit.edu/logo-foundation/what_is_logo/index.html to understand about Logo.

You can try it to click https://sword-huang.github.io/web_logo/main.html

# Now implements below command

## Position Command
|No| Command | Description         | Usage         |s
| - | -      | -                   | -             |
| 1 | FD     | 向前移動，Forward       | FD 100        |
| 2 | BK     | 向後移動，Back          | BK 100        |
| 3 | HOME   | 回到起始點，Home         | HOME          |
| 4 | SETXY  | 設定位置，Set Position  | SETXY 100 100 |
| 5 | SETX   | 設定 X 軸位置，Set X     | SETX 100      |
| 6 | SETY   | 設定 Y 軸位置，Set Y     | SETY 100      |

## Angle Command
|No| Command | Description | Usage|
| -  | -       | -                           | -|
| 1 | LT     | 向左轉幾度，Left |  LT 90 |
| 2 | RT     | 向右轉幾度，Right |  RT 90 |
| 3 | SETH | 設定角度為幾度，Set Head |  SETH 60 |

## Pen Command
|No| Command | Description | Usage|
| -  | -       | -                           | -|
|1 | PU | Pen Up | PU |
|2 | PD | Pen Down | PD |
|3 | SETPC | Set Pen Color | SETPC 000 000 255 |

## Draw Command
|No| Command | Description | Usage|
| -  | -       | -                           | -|
| 1 | CS | Clear Screen |
| 2 | CC | Center Circle | CC 100 |
| 3 | LC | Left Side Circle | LC 100|
| 4 | RC | Right Side Circle | RC 100 |
| 5 | UC | Upper Side Circle | UC 100| 
| 6 | DC | Down Side Circle | DC 100 |
| 7 | CB | Center Box |  CB 100 |
| 8 | ULB | Upper Left Side Box | ULB 100 |
| 9 | URB | Upper Right Side Box | URB 100 |
| 10 | DLB | Down Left Side Box | DLB 100 |
| 11 | DRB | Down Right Side Box | DRC 100 |

# Unimplement Command

No   英文指令       英文簡碼     中文        用法舉例                            用法說明
1.    PENERASE    PE        筆擦        PE                     走過的地方會擦去
2.    PENNORMAL   PENNORMAL 回復正常 PENNORMAL              回復正常
3.    SHOWTURTLE  ST        出現        ST                     顯示小海龜
4.   HIDETURTLE  HT        隱形        HT                     不顯示小海龜
5.   CLEARSCREEN CS        清除        CS                     清除繪圖區, 小海龜回原點(0,0)
6.   CLEANTEXT   CT        清文        CT                     清除文字區
7.   CLEAN       CLEAN     清圖        CLEAN                  清除繪圖區, 小海龜留在最後的地方
8.   REPEAT      REPEAT    重複        REPEAT 4[FD 100 RT 90] 重複括弧內指令4次，形成一正方形, REPCOUNT 

其他(海龜)畫圖指令
No   英文指令             英文簡碼        中文                                                                            用法舉例                                          用法說明
2.    setscreencolor SETSC       設定螢幕的顏色                                                          setsc [000 255 000]                      設定螢幕的顏色為綠色
3.   setfloodcolor  setfc       設定範圍內的底色的顏色，需配合FILL指令填入顏色   SETFC [000 000 255]            設定範圍內的底色的顏色為藍色。
4.    FILL           FILL        填入顏色                                                                    FILL                           填入顏色
5.    SETPENSIZE     SETPENSIZE  筆粗                                                                           SETPENSIZE [10 20]             將筆粗設為[10 20]點
1.   LABEL          LABEL       印字                                                                          LABEL "HI                      在繪圖區印出字串"HI"
11.   SOUND          SOUND       聲音                                                                          SOUND[262 100]                 發出DO的聲音
