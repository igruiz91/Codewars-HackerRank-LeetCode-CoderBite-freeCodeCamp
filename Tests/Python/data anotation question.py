def decode(message_file):
  str = [lines.split() for lines in message_file.split('\n')]
  obj_str = {int(k):v for k, v in str}
  obj_str = sorted(obj_str.items(), key=lambda x:x[0])
  resp = []
  i = 0
  count = 2
  while i< (len(obj_str)):
    k, v = obj_str[i]
    resp.append(f"{k}: {v}")
    i+=count
    count+=1
  return "\n".join(resp)









# str ="3 love\n6 computers\n2 dogs\n4 cats\n1 I\n5 you"
final = "283 land\n45 sun\n149 too\n258 huge\n161 dont\n224 such\n169 noun\n10 student\n185 brown\n41 complete\n63 play\n187 cook\n160 yard\n82 clock\n300 would\n179 plain\n174 excite\n273 fire\n84 wish\n22 cool\n263 child\n212 past\n261 colony\n248 oil\n218 dog\n292 back\n89 money\n70 kind\n126 open\n214 finger\n86 touch\n249 are\n296 dad\n122 am\n256 modern\n171 meant\n206 ocean\n231 pitch\n250 suit\n71 town\n76 east\n116 over\n177 group\n157 good\n146 kind\n164 down\n4 band\n56 especially\n234 organ\n298 of\n180 fire\n49 out\n232 area\n124 touch\n123 happen\n26 sat\n130 electric\n295 wrote\n127 buy\n15 lot\n69 stop\n11 corn\n54 where\n247 check\n73 live\n221 best\n168 hold\n286 cause\n233 grand\n6 present\n79 indicate\n46 counter\n162 we\n193 like\n222 visit\n251 state\n139 morning\n112 true\n279 are\n142 ball\n190 history\n34 seat\n228 rain\n227 less\n25 glass\n240 tone\n37 song\n128 fair\n211 element\n197 speed\n57 produce\n32 quotient\n259 sand\n290 begin\n138 moment\n24 offer\n16 probable\n235 all\n163 necessary\n147 post\n35 cent\n2 happen\n8 speech\n198 object\n267 silver\n297 third\n36 crease\n191 wait\n111 triangle\n219 idea\n136 clothe\n1 young\n181 discuss\n154 field\n118 company\n215 capital\n132 compare\n217 chart\n141 possible\n257 written\n78 remember\n119 mile\n245 cold\n196 lady\n165 felt\n153 against\n96 skin\n107 prepare\n51 he\n90 card\n5 organ\n274 object\n47 our\n159 major\n60 discuss\n3 system\n266 hole\n188 above\n246 they\n83 produce\n148 straight\n134 level\n62 though\n99 modern\n59 dry\n275 bought\n91 milk\n294 make\n80 show\n207 middle\n291 center\n184 blood\n167 speak\n74 prove\n50 select\n223 power\n108 come\n39 brown\n21 experiment\n28 strong\n66 hurry\n229 touch\n30 reach\n110 case\n216 beat\n129 over\n143 dry\n264 hill\n55 company\n203 opposite\n131 work\n238 field\n158 felt\n65 prepare\n12 now\n281 his\n125 stay\n64 toward\n288 observe\n102 time\n194 stop\n72 possible\n284 card\n271 prepare\n262 current\n93 compare\n121 neighbor\n178 thus\n254 include\n17 copy\n14 bit\n42 stead\n100 does\n101 general\n77 solve\n252 glad\n106 duck\n40 offer\n88 happen\n293 ball\n276 bread\n61 like\n92 machine\n287 come\n109 any\n226 band\n58 it\n202 section\n282 close\n23 heavy\n205 produce\n68 got\n140 possible\n18 insect\n201 way\n176 before\n98 men\n237 bird\n270 ease\n277 trade\n172 winter\n97 am\n120 repeat\n104 first\n103 to\n135 each\n225 guide\n53 column\n156 single\n43 remember\n243 wild\n236 major\n242 coast\n52 class\n170 done\n75 jump\n67 sister\n166 feel\n239 check\n269 fire\n19 nine\n210 indicate\n189 parent\n94 whole\n289 her\n173 the\n209 temperature\n260 design\n175 big\n208 skill\n38 friend\n278 hit\n230 wait\n48 instant\n199 blow\n113 about\n244 chick\n241 answer\n137 man\n200 material\n255 current\n85 think\n253 print\n95 nor\n220 better\n29 example\n27 people\n186 drink\n44 gun\n87 together\n81 cost\n150 require\n155 or\n9 people\n7 planet\n183 ease\n114 ready\n115 enough\n33 sugar\n299 deal\n133 with\n105 us\n272 share\n152 office\n268 protect\n265 low\n213 thus\n13 farm\n280 oxygen\n144 fire\n117 force\n195 select\n285 paragraph\n204 always\n31 poem\n20 chick\n145 planet\n151 fact\n192 moment\n182 term"
print(decode(final))

