# web_logo

I implement logo on web. User can input command to let turtle draw a picture.

You can refer https://en.wikipedia.org/wiki/Logo_(programming_language) or http://el.media.mit.edu/logo-foundation/what_is_logo/index.html to understand about Logo.

Now it implement below command:

Position Command
1. FD: Forward, FD 100
2. BK: Back, BK 100
3. HOME: Home, HOME
4. SETPOS: SETPOS, SETPOS 100 100
5. SETX: SETX, SETX 100
6. SETY: SETY, SETY 100

Angle Command
1. LT: LEFT, LT 90
2. RT: RIGHT, RT 90
3. SETH: SETHEAD, SETH 60

Pen Command
1. PU: PENUP, PU
2. PD: PENDOWN, PD
3. SETPC: Set pen color, setpc 000 000 255

Draw Command
1. CS: Clear Screen
2. CC: Center Circle, CC 100
3. LC: Left Side Circle, LC 100
4. RC: Right Side Circle, RC 100
5. UC: Upper Side Circle, UC 100
6. DC: Down Side Circle, DC 100
7. CB: Center Box, CB 100
8. ULB: Upper Left Side Box, ULB 100
9. URB: Upper Right Side Box, URB 100
10. DLB: Down Left Side Box, DLB 100
11. DRB: Down Right Side Box, DRC 100


No   �^����O       �^��²�X     ����        �Ϊk�|��                            �Ϊk����
1.    PENERASE    PE        ����        PE                     ���L���a��|���h
2.    PENNORMAL   PENNORMAL �^�_���` PENNORMAL              �^�_���`
3.    SHOWTURTLE  ST        �X�{        ST                     ��ܤp���t
4.   HIDETURTLE  HT        ����        HT                     ����ܤp���t
5.   CLEARSCREEN CS        �M��        CS                     �M��ø�ϰ�, �p���t�^���I(0,0)
6.   CLEANTEXT   CT        �M��        CT                     �M����r��
7.   CLEAN       CLEAN     �M��        CLEAN                  �M��ø�ϰ�, �p���t�d�b�̫᪺�a��
8.   REPEAT      REPEAT    ����        REPEAT 4[FD 100 RT 90] ���ƬA�������O4���A�Φ��@�����

��L(���t)�e�ϫ��O
No   �^����O             �^��²�X        ����                                                                            �Ϊk�|��                                          �Ϊk����
2.    setscreencolor SETSC       �]�w�ù����C��                                                          setsc [000 255 000]                      �]�w�ù����C�⬰���
3.   setfloodcolor  setfc       �]�w�d�򤺪����⪺�C��A�ݰt�XFILL���O��J�C��   SETFC [000 000 255]            �]�w�d�򤺪����⪺�C�⬰�Ŧ�C
4.    FILL           FILL        ��J�C��                                                                    FILL                           ��J�C��
5.    SETPENSIZE     SETPENSIZE  ����                                                                           SETPENSIZE [10 20]             �N���ʳ]��[10 20]�I
1.   LABEL          LABEL       �L�r                                                                          LABEL "HI                      �bø�ϰϦL�X�r��"HI"
11.   SOUND          SOUND       �n��                                                                          SOUND[262 100]                 �o�XDO���n��
