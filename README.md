# web_logo

I implement logo on web. User can input command to let turtle draw a picture.

You can refer https://en.wikipedia.org/wiki/Logo_(programming_language) or http://el.media.mit.edu/logo-foundation/what_is_logo/index.html to understand about Logo.

Now it implement below command:

 	

No   �^����O       �^��²�X     ����        �Ϊk�|��                            �Ϊk����
1    FORWARD     FD        �e�i        FD 100                 �e�i 100 �B
2    BACK        BK        ��h        BK 100                 ��h 100 �B
3    RIGHT       RT        �k��        RT 90                  �k�� 90 ��
4    LEFT        LT        ����        LT 90                  ���� 90 ��
5    PENUP       PU        ����        PU                     �ⵧ���_, ���d����
6    PENDOWN     PD        �U��        PD                     �ⵧ��U, �|�d����
7    PENERASE    PE        ����        PE                     ���L���a��|���h
8    PENNORMAL   PENNORMAL �^�_���` PENNORMAL              �^�_���`
9    SHOWTURTLE  ST        �X�{        ST                     ��ܤp���t
10   HIDETURTLE  HT        ����        HT                     ����ܤp���t
11   CLEARSCREEN CS        �M��        CS                     �M��ø�ϰ�, �p���t�^���I(0,0)
12   CLEANTEXT   CT        �M��        CT                     �M����r��
13   CLEAN       CLEAN     �M��        CLEAN                  �M��ø�ϰ�, �p���t�d�b�̫᪺�a��
14   HOME        HOME      �^�a        HOME                   �p���t�^���I(0,0)
15   REPEAT      REPEAT    ����        REPEAT 4[FD 100 RT 90] ���ƬA�������O4���A�Φ��@�����

��L(���t)�e�ϫ��O
No   �^����O             �^��²�X        ����                                                                            �Ϊk�|��                                          �Ϊk����
1    setpencolor    SETPC       �]�w�e�����C��                                                          setpc [000 000 255]            �]�w�e�����C�⬰�Ŧ�C
2    setscreencolor SETSC       �]�w�ù����C��                                                          setsc [000 255 000]                      �]�w�ù����C�⬰���
3    setfloodcolor  setfc       �]�w�d�򤺪����⪺�C��A�ݰt�XFILL���O��J�C��   SETFC [000 000 255]            �]�w�d�򤺪����⪺�C�⬰�Ŧ�C
4    FILL           FILL        ��J�C��                                                                    FILL                           ��J�C��
5    SETPENSIZE     SETPENSIZE  ����                                                                           SETPENSIZE [10 20]             �N���ʳ]��[10 20]�I
6    SETHEAD        SETH        �w��                                                                           SETH 60                        �]�w�p���t�����׬�60��(0-360)
7    SETPOS         SETPOS      �w��                                                                           SETPOS [100 100]               ��p���t�w��b�y�� (100,100)
8    SETX           SETX        ��y��                                                                       SETX 100                       ��p���t�w��b��y��(100,Y)
9    SETY           SETY        �a�y��                                                                       SETY 100                       ��p���t�w��b�a�y��(X,100)
10   LABEL          LABEL       �L�r                                                                          LABEL "HI                      �bø�ϰϦL�X�r��"HI"
11   SOUND          SOUND       �n��                                                                          SOUND[262 100]                 �o�XDO���n��

    �i���]�{���]�p�^���O����
	
�^����O �^��²�X ������O
	
�Ϊk�|��
	
�Ϊk����
1
	
TO
	
TO
	
�w�q
	
TO BBB
	
�w�q�{�� BBB
2
	
END
	
END
	
����
	
END
	
�{�ǩw�q����
3
	
PRINT
	
PR
	
�L�X
	
PR "HI
	
�b��r�ϦL�X�r��"HI"
4
	
WHILE
	
While
	
��
	
make "i 0
while [:i<3] [make "i :i+1 print :i]
	
��hile �M���j��
5
	
IFELSE
	
IfElse
	
���p��_�h
	
ifelse 1=1 [print [Yes it is true]] [print [No it is false]]
	
IF ~ ELSE �M�����O
6
	
STOP
	
STOP
	
����
		
�����{��(�`�t�XIF ~ ELSE)
7
	
MESSA
GEBOX
	
MESSA
GEBOX
	
�T��
	
MESSAGEBOX [This is the banner] [This is the body]
	
���ܰT��
8
	
TRUE
	
TRUE
	
�u
	
TRUE
	
9
	
FALSE
	
FALSE
	
��
	
FALSE
	
10
	
XCOR
	
XCOR
	
��y�Ъ���
	
XCOR
	
11
	
YCOR
	
YCOR
	
�a�y�Ъ���
	
YCOR
	
12
	
PI
	
PI
	
��P�v
	
PI
	
13
	
SQRT
	
SQRT
	
�}�����
	
SQRT 4
	
14
	
RANDOM
	
RANDOM
	
���ü�
	
RANDOM 100
	
15
	
EXP
	
EXP
	
����
	
EXP 1
	
16
	
SIN
	
SIN
	
����
	
SIN 90
	
17
	
COS
	
COS
	
�l��
	
COS 90
	
18
	
FIRST
	
FIRST
	
�r��
	
PR FIRST "HELLO
	
��� "HELLO ���r�� H
19
	
BUTFIRST
	
BF
	
�h��
	
PR BF "HELLO
	
��� "HELLO ���h���r�� ELLO
20
	
LAST
	
LAST
	
�r��
	
PR LAST "HELLO
	
��� "HELLO ���r�� O
21
	
BUTLAST
	
BL
	
�h��
	
PR BL "HELLO
	
��� "HELLO ���h���r�� HELL
22
	
POTS
	
POTS
		
POTS
	
��ܵ{�ǩ��Y
23
	
PO
	
PO
		
PO AAA
	
��� AAA �{�Ǥ��e
24
	
ERALL
	
ERALL
		
ERALL
	
�R���Ҧ��{��
25
	
ERASE
	
ER
		
ER AAA
	
�R���{��AAA
26
	
EDIT
	
ED
	
�s��
	
ED AAA
	
�s��{�� AAA
27
	
LOAD
	
LOAD
	
����
	
LOAD "AAA.LGO
	
�}���ɮ� AAA.LGO
28
	
SAVE
	
SAVE
	
�s��
	
SAVE "AAA.LGO
	
�x�s�ɮ� AAA.LGO