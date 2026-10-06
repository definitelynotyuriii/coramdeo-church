import { useState, useEffect, useRef } from 'react'

const VERSES = [
  { text: "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", ref: "Psalm 16:11" },
  { text: "The LORD is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", ref: "Proverbs 3:5-6" },
  { text: "I can do all things through Christ which strengtheneth me.", ref: "Philippians 4:13" },
  { text: "Fear thou not; for I am with thee; be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.", ref: "Isaiah 41:10" },
  { text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", ref: "Jeremiah 29:11" },
  { text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", ref: "Romans 8:28" },
  { text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", ref: "Joshua 1:9" },
  { text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", ref: "John 3:16" },
  { text: "God is our refuge and strength, a very present help in trouble.", ref: "Psalm 46:1" },
  { text: "Thy word is a lamp unto my feet, and a light unto my path.", ref: "Psalm 119:105" },
  { text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.", ref: "Philippians 4:6" },
  { text: "They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary.", ref: "Isaiah 40:31" },
  { text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?", ref: "Psalm 27:1" },
  { text: "For we walk by faith, not by sight.", ref: "2 Corinthians 5:7" },
  { text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.", ref: "Psalm 121:1-2" },
  { text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", ref: "Lamentations 3:22-23" },
  { text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", ref: "Matthew 6:33" },
  { text: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.", ref: "1 Corinthians 13:13" },
  { text: "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.", ref: "Psalm 37:4" },
  { text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.", ref: "Ephesians 2:8" },
  { text: "Now faith is the substance of things hoped for, the evidence of things not seen.", ref: "Hebrews 11:1" },
  { text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.", ref: "Psalm 34:8" },
  { text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.", ref: "John 14:6" },
  { text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", ref: "Romans 15:13" },
  { text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", ref: "Psalm 100:4" },
  { text: "We love him, because he first loved us.", ref: "1 John 4:19" },
  { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", ref: "Colossians 3:23" },
  { text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", ref: "Micah 6:8" },

  // FAITH
  { text: "But without faith it is impossible to please him: for he that cometh to God must believe that he is.", ref: "Hebrews 11:6" },
  { text: "For we walk by faith, not by sight.", ref: "2 Corinthians 5:7" },
  { text: "If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove.", ref: "Matthew 17:20" },
  { text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.", ref: "Romans 5:1" },
  { text: "The just shall live by faith.", ref: "Romans 1:17" },
  { text: "Fight the good fight of faith, lay hold on eternal life.", ref: "1 Timothy 6:12" },
  { text: "Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.", ref: "Ephesians 6:16" },

  // STRENGTH & COURAGE
  { text: "The LORD is their strength, and he is the saving strength of his anointed.", ref: "Psalm 28:8" },
  { text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.", ref: "Psalm 28:7" },
  { text: "The LORD will give strength unto his people; the LORD will bless his people with peace.", ref: "Psalm 29:11" },
  { text: "God is my strength and power: and he maketh my way perfect.", ref: "2 Samuel 22:33" },
  { text: "I will love thee, O LORD, my strength.", ref: "Psalm 18:1" },
  { text: "The LORD is the strength of my life; of whom shall I be afraid?", ref: "Psalm 27:1" },
  { text: "Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD.", ref: "Psalm 27:14" },
  { text: "Be strong and courageous, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee.", ref: "Deuteronomy 31:6" },
  { text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed.", ref: "Joshua 1:9" },

  // PEACE
  { text: "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", ref: "Isaiah 26:3" },
  { text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.", ref: "John 14:27" },
  { text: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", ref: "Philippians 4:7" },
  { text: "The LORD will give strength unto his people; the LORD will bless his people with peace.", ref: "Psalm 29:11" },
  { text: "Great peace have they which love thy law: and nothing shall offend them.", ref: "Psalm 119:165" },
  { text: "Now the Lord of peace himself give you peace always by all means. The Lord be with you all.", ref: "2 Thessalonians 3:16" },

  // GOD'S LOVE
  { text: "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love.", ref: "Jeremiah 31:3" },
  { text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", ref: "Romans 5:8" },
  { text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, shall be able to separate us from the love of God.", ref: "Romans 8:38-39" },
  { text: "Greater love hath no man than this, that a man lay down his life for his friends.", ref: "John 15:13" },
  { text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God.", ref: "1 John 3:1" },
  { text: "Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.", ref: "1 John 4:10" },

  // PRAYER
  { text: "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.", ref: "Jeremiah 33:3" },
  { text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.", ref: "Matthew 7:7" },
  { text: "If ye shall ask any thing in my name, I will do it.", ref: "John 14:14" },
  { text: "The effectual fervent prayer of a righteous man availeth much.", ref: "James 5:16" },
  { text: "Pray without ceasing.", ref: "1 Thessalonians 5:17" },
  { text: "Casting all your care upon him; for he careth for you.", ref: "1 Peter 5:7" },
  { text: "The LORD is nigh unto all them that call upon him, to all that call upon him in truth.", ref: "Psalm 145:18" },

  // HOPE
  { text: "Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God.", ref: "Psalm 42:11" },
  { text: "The LORD is good unto them that wait for him, to the soul that seeketh him.", ref: "Lamentations 3:25" },
  { text: "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.", ref: "Jeremiah 17:7" },
  { text: "The hope of the righteous shall be gladness: but the expectation of the wicked shall perish.", ref: "Proverbs 10:28" },
  { text: "Which hope we have as an anchor of the soul, both sure and stedfast.", ref: "Hebrews 6:19" },

  // WISDOM
  { text: "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.", ref: "Proverbs 9:10" },
  { text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally.", ref: "James 1:5" },
  { text: "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.", ref: "Proverbs 4:7" },
  { text: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.", ref: "Proverbs 1:7" },
  { text: "The wise in heart will receive commandments: but a prating fool shall fall.", ref: "Proverbs 10:8" },

  // GUIDANCE
  { text: "In all thy ways acknowledge him, and he shall direct thy paths.", ref: "Proverbs 3:6" },
  { text: "Commit thy works unto the LORD, and thy thoughts shall be established.", ref: "Proverbs 16:3" },
  { text: "The steps of a good man are ordered by the LORD: and he delighteth in his way.", ref: "Psalm 37:23" },
  { text: "Teach me thy way, O LORD, and lead me in a plain path.", ref: "Psalm 27:11" },
  { text: "Shew me thy ways, O LORD; teach me thy paths. Lead me in thy truth, and teach me.", ref: "Psalm 25:4-5" },
  { text: "A man's heart deviseth his way: but the LORD directeth his steps.", ref: "Proverbs 16:9" },

  // THANKSGIVING & PRAISE
  { text: "O give thanks unto the LORD; for he is good: for his mercy endureth for ever.", ref: "Psalm 136:1" },
  { text: "This is the day which the LORD hath made; we will rejoice and be glad in it.", ref: "Psalm 118:24" },
  { text: "I will bless the LORD at all times: his praise shall continually be in my mouth.", ref: "Psalm 34:1" },
  { text: "Let every thing that hath breath praise the LORD. Praise ye the LORD.", ref: "Psalm 150:6" },
  { text: "Praise ye the LORD. O give thanks unto the LORD; for he is good: for his mercy endureth for ever.", ref: "Psalm 106:1" },
  { text: "Give thanks unto the LORD, call upon his name, make known his deeds among the people.", ref: "1 Chronicles 16:8" },

  // GOD'S FAITHFULNESS
  { text: "God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord.", ref: "1 Corinthians 1:9" },
  { text: "The LORD is faithful, who shall stablish you, and keep you from evil.", ref: "2 Thessalonians 3:3" },
  { text: "Know therefore that the LORD thy God, he is God, the faithful God.", ref: "Deuteronomy 7:9" },
  { text: "Faithful is he that calleth you, who also will do it.", ref: "1 Thessalonians 5:24" },
  { text: "His compassions fail not. They are new every morning: great is thy faithfulness.", ref: "Lamentations 3:22-23" },

  // SALVATION
  { text: "For whosoever shall call upon the name of the Lord shall be saved.", ref: "Romans 10:13" },
  { text: "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.", ref: "Acts 16:31" },
  { text: "For the Son of man is come to seek and to save that which was lost.", ref: "Luke 19:10" },
  { text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", ref: "Acts 4:12" },
  { text: "For the grace of God that bringeth salvation hath appeared to all men.", ref: "Titus 2:11" },

  // LOVE & KINDNESS
  { text: "Let all your things be done with charity.", ref: "1 Corinthians 16:14" },
  { text: "And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.", ref: "1 Peter 4:8" },
  { text: "Be kindly affectioned one to another with brotherly love; in honour preferring one another.", ref: "Romans 12:10" },
  { text: "And above all these things put on charity, which is the bond of perfectness.", ref: "Colossians 3:14" },
  { text: "Let brotherly love continue.", ref: "Hebrews 13:1" },

  // DAILY LIFE
  { text: "This is the day which the LORD hath made; we will rejoice and be glad in it.", ref: "Psalm 118:24" },
  { text: "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.", ref: "1 Corinthians 10:31" },
  { text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.", ref: "Matthew 5:16" },
  { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", ref: "Colossians 3:23" },
  { text: "If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God.", ref: "Colossians 3:1" },
  { text: "Rejoice evermore.", ref: "1 Thessalonians 5:16" },
  { text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", ref: "1 Thessalonians 5:18" },

  // PROTECTION
  { text: "The angel of the LORD encampeth round about them that fear him, and delivereth them.", ref: "Psalm 34:7" },
  { text: "The LORD shall preserve thee from all evil: he shall preserve thy soul.", ref: "Psalm 121:7" },
  { text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.", ref: "Psalm 91:1" },
  { text: "He shall cover thee with his feathers, and under his wings shalt thou trust.", ref: "Psalm 91:4" },
  { text: "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.", ref: "Proverbs 18:10" },

  // WHEN YOU ARE WEARY
  { text: "He giveth power to the faint; and to them that have no might he increaseth strength.", ref: "Isaiah 40:29" },
  { text: "My grace is sufficient for thee: for my strength is made perfect in weakness.", ref: "2 Corinthians 12:9" },
  { text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.", ref: "Matthew 11:29" },
  { text: "For I have satiated the weary soul, and I have replenished every sorrowful soul.", ref: "Jeremiah 31:25" },

  // WHEN YOU ARE AFRAID
  { text: "What time I am afraid, I will trust in thee.", ref: "Psalm 56:3" },
  { text: "The LORD is on my side; I will not fear: what can man do unto me?", ref: "Psalm 118:6" },
  { text: "Fear ye not therefore, ye are of more value than many sparrows.", ref: "Matthew 10:31" },
  { text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", ref: "2 Timothy 1:7" },
  { text: "I sought the LORD, and he heard me, and delivered me from all my fears.", ref: "Psalm 34:4" },

  // WHEN YOU ARE SAD
  { text: "Weeping may endure for a night, but joy cometh in the morning.", ref: "Psalm 30:5" },
  { text: "He healeth the broken in heart, and bindeth up their wounds.", ref: "Psalm 147:3" },
  { text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", ref: "Psalm 34:18" },
  { text: "Blessed are they that mourn: for they shall be comforted.", ref: "Matthew 5:4" },
  { text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.", ref: "Psalm 23:3" },

  // GOD'S PRESENCE
  { text: "I will never leave thee, nor forsake thee.", ref: "Hebrews 13:5" },
  { text: "Lo, I am with you alway, even unto the end of the world. Amen.", ref: "Matthew 28:20" },
  { text: "Whither shall I go from thy spirit? or whither shall I flee from thy presence?", ref: "Psalm 139:7" },
  { text: "For where two or three are gathered together in my name, there am I in the midst of them.", ref: "Matthew 18:20" },
  { text: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy.", ref: "Zephaniah 3:17" },

  // GOD'S WORD
  { text: "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.", ref: "Isaiah 40:8" },
  { text: "For the word of God is quick, and powerful, and sharper than any twoedged sword.", ref: "Hebrews 4:12" },
  { text: "Every word of God is pure: he is a shield unto them that put their trust in him.", ref: "Proverbs 30:5" },
  { text: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.", ref: "Matthew 4:4" },
  { text: "Sanctify them through thy truth: thy word is truth.", ref: "John 17:17" },

  // FORGIVENESS
  { text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", ref: "1 John 1:9" },
  { text: "As far as the east is from the west, so far hath he removed our transgressions from us.", ref: "Psalm 103:12" },
  { text: "For I will forgive their iniquity, and I will remember their sin no more.", ref: "Jeremiah 31:34" },
  { text: "Blessed is he whose transgression is forgiven, whose sin is covered.", ref: "Psalm 32:1" },
  { text: "Who forgiveth all thine iniquities; who healeth all thy diseases.", ref: "Psalm 103:3" },

  // HUMILITY
  { text: "Humble yourselves in the sight of the Lord, and he shall lift you up.", ref: "James 4:10" },
  { text: "Before honour is humility.", ref: "Proverbs 15:33" },
  { text: "For whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted.", ref: "Matthew 23:12" },
  { text: "Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.", ref: "Philippians 2:3" },

  // PURPOSE
  { text: "For we are his workmanship, created in Christ Jesus unto good works.", ref: "Ephesians 2:10" },
  { text: "I have chosen you, and ordained you, that ye should go and bring forth fruit.", ref: "John 15:16" },
  { text: "For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.", ref: "Romans 11:36" },
  { text: "For to me to live is Christ, and to die is gain.", ref: "Philippians 1:21" },
  { text: "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.", ref: "1 Corinthians 10:31" },

  // GOD'S GOODNESS
  { text: "Oh give thanks unto the LORD, for he is good: for his mercy endureth for ever.", ref: "Psalm 107:1" },
  { text: "The LORD is good to all: and his tender mercies are over all his works.", ref: "Psalm 145:9" },
  { text: "For the LORD is good; his mercy is everlasting; and his truth endureth to all generations.", ref: "Psalm 100:5" },
  { text: "Surely goodness and mercy shall follow me all the days of my life.", ref: "Psalm 23:6" },
  { text: "Every good gift and every perfect gift is from above, and cometh down from the Father of lights.", ref: "James 1:17" },

  // JESUS CHRIST
  { text: "Jesus Christ the same yesterday, and to day, and for ever.", ref: "Hebrews 13:8" },
  { text: "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.", ref: "John 11:25" },
  { text: "I am the good shepherd: the good shepherd giveth his life for the sheep.", ref: "John 10:11" },
  { text: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.", ref: "John 8:12" },
  { text: "I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.", ref: "John 6:35" },
  { text: "I am the true vine, and my Father is the husbandman.", ref: "John 15:1" },
  { text: "I am the door: by me if any man enter in, he shall be saved.", ref: "John 10:9" },

  // ETERNAL LIFE
  { text: "And this is the promise that he hath promised us, even eternal life.", ref: "1 John 2:25" },
  { text: "And this is the record, that God hath given to us eternal life, and this life is in his Son.", ref: "1 John 5:11" },
  { text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", ref: "Romans 6:23" },
  { text: "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.", ref: "John 10:28" },

  // PERSEVERANCE
  { text: "Let us not be weary in well doing: for in due season we shall reap, if we faint not.", ref: "Galatians 6:9" },
  { text: "And let us run with patience the race that is set before us.", ref: "Hebrews 12:1" },
  { text: "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.", ref: "James 1:12" },
  { text: "But he that shall endure unto the end, the same shall be saved.", ref: "Matthew 24:13" },
  { text: "For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.", ref: "Hebrews 10:36" },

  // JOY
  { text: "Rejoice in the Lord alway: and again I say, Rejoice.", ref: "Philippians 4:4" },
  { text: "In thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", ref: "Psalm 16:11" },
  { text: "The joy of the LORD is your strength.", ref: "Nehemiah 8:10" },
  { text: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.", ref: "John 15:11" },
  { text: "They that sow in tears shall reap in joy.", ref: "Psalm 126:5" },

  // CONTENTMENT
  { text: "But godliness with contentment is great gain.", ref: "1 Timothy 6:6" },
  { text: "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content.", ref: "Philippians 4:11" },
  { text: "Having food and raiment let us be therewith content.", ref: "1 Timothy 6:8" },

  // GENEROSITY
  { text: "It is more blessed to give than to receive.", ref: "Acts 20:35" },
  { text: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over.", ref: "Luke 6:38" },
  { text: "God loveth a cheerful giver.", ref: "2 Corinthians 9:7" },
  { text: "He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again.", ref: "Proverbs 19:17" },

  // SERVING GOD
  { text: "Serve the LORD with gladness: come before his presence with singing.", ref: "Psalm 100:2" },
  { text: "As for me and my house, we will serve the LORD.", ref: "Joshua 24:15" },
  { text: "But serve ye the LORD your God, and he shall bless thy bread, and thy water.", ref: "Exodus 23:25" },
  { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", ref: "Colossians 3:23" },

  // SPIRITUAL GROWTH
  { text: "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.", ref: "2 Peter 3:18" },
  { text: "As newborn babes, desire the sincere milk of the word, that ye may grow thereby.", ref: "1 Peter 2:2" },
  { text: "That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine.", ref: "Ephesians 4:14" },
  { text: "But speaking the truth in love, may grow up into him in all things, which is the head, even Christ.", ref: "Ephesians 4:15" },

  // ENDURANCE
  { text: "We glory in tribulations also: knowing that tribulation worketh patience; and patience, experience; and experience, hope.", ref: "Romans 5:3-4" },
  { text: "My brethren, count it all joy when ye fall into divers temptations; knowing this, that the trying of your faith worketh patience.", ref: "James 1:2-3" },
  { text: "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.", ref: "2 Corinthians 4:17" },
  { text: "We are troubled on every side, yet not distressed; we are perplexed, but not in despair.", ref: "2 Corinthians 4:8" },

  // GOD'S PROMISES
  { text: "Heaven and earth shall pass away, but my words shall not pass away.", ref: "Matthew 24:35" },
  { text: "For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.", ref: "2 Corinthians 1:20" },
  { text: "The LORD is not slack concerning his promise, as some men count slackness.", ref: "2 Peter 3:9" },
  { text: "God is not a man, that he should lie; neither the son of man, that he should repent.", ref: "Numbers 23:19" },

  // CLOSING / DAILY REMINDERS
  { text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.", ref: "Psalm 37:5" },
  { text: "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.", ref: "Psalm 37:4" },
  { text: "The LORD shall fight for you, and ye shall hold your peace.", ref: "Exodus 14:14" },
  { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
  { text: "The LORD bless thee, and keep thee: the LORD make his face shine upon thee, and be gracious unto thee.", ref: "Numbers 6:24-25" },
  { text: "The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.", ref: "Psalm 121:8" },
  { text: "The LORD shall guide thee continually, and satisfy thy soul in drought, and make fat thy bones.", ref: "Isaiah 58:11" },
  { text: "Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us.", ref: "Psalm 62:8" },
  { text: "The LORD is near to all them that call upon him, to all that call upon him in truth.", ref: "Psalm 145:18" },
  { text: "Bless the LORD, O my soul, and forget not all his benefits.", ref: "Psalm 103:2" }
];

// ===== BIBLE BOOKS: [name, number of chapters] =====
const BOOKS = [
  ["Genesis", 50], ["Exodus", 40], ["Leviticus", 27], ["Numbers", 36], ["Deuteronomy", 34],
  ["Joshua", 24], ["Judges", 21], ["Ruth", 4], ["1 Samuel", 31], ["2 Samuel", 24],
  ["1 Kings", 22], ["2 Kings", 25], ["1 Chronicles", 29], ["2 Chronicles", 36], ["Ezra", 10],
  ["Nehemiah", 13], ["Esther", 10], ["Job", 42], ["Psalms", 150], ["Proverbs", 31],
  ["Ecclesiastes", 12], ["Song of Solomon", 8], ["Isaiah", 66], ["Jeremiah", 52], ["Lamentations", 5],
  ["Ezekiel", 48], ["Daniel", 12], ["Hosea", 14], ["Joel", 3], ["Amos", 9],
  ["Obadiah", 1], ["Jonah", 4], ["Micah", 7], ["Nahum", 3], ["Habakkuk", 3],
  ["Zephaniah", 3], ["Haggai", 2], ["Zechariah", 14], ["Malachi", 4],
  ["Matthew", 28], ["Mark", 16], ["Luke", 24], ["John", 21], ["Acts", 28],
  ["Romans", 16], ["1 Corinthians", 16], ["2 Corinthians", 13], ["Galatians", 6], ["Ephesians", 6],
  ["Philippians", 4], ["Colossians", 4], ["1 Thessalonians", 5], ["2 Thessalonians", 3], ["1 Timothy", 6],
  ["2 Timothy", 4], ["Titus", 3], ["Philemon", 1], ["Hebrews", 13], ["James", 5],
  ["1 Peter", 5], ["2 Peter", 3], ["1 John", 5], ["2 John", 1], ["3 John", 1],
  ["Jude", 1], ["Revelation", 22],
]

// ===== EDIT YOUR VISIT INFO HERE =====
const VISIT_INFO = {
  services: [
    { day: "Sunday", time: "10:00 AM" },
  ],
  address: "Bugnay, Tuao, Cagayan",
  mapsQuery: "Bugnay, Tuao, Cagayan",
  expect: [
    "Warm welcome from our greeters",
    "Opening Prayer, Praise and Worship, Testimony, Special Number, Message from God through our Pastora, Closing Prayer",
    "Come as you are and worship God with us",
  ],
  contact: "", // e.g. "0917 123 4567" (leave empty to hide)
}
// =====================================

// ===== HERO SLIDESHOW IMAGES (put files in public/images/) =====
// Add or remove lines to change how many pictures you have.
const HERO_IMAGES = [
  '/images/Coramdeo.jpg',
  '/images/CHURCH.jpg',
  '/images/CHURCH1.jpg',
  '/images/CHURCH2.jpg',
  '/images/CHURCH3.jpg',
  '/images/CHURCH4.jpg',
]
// ================================================================

export function getVerseOfTheDay() {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now - startOfYear) / 86400000)
  return VERSES[dayOfYear % VERSES.length]
}

// Scroll reveal: fades/slides/unblurs in when it enters the screen, replays every time
function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    up: 'translateY(48px)',
    left: 'translateX(-56px)',
    right: 'translateX(56px)',
    zoom: 'scale(0.92)',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hidden,
        filter: visible ? 'blur(0px)' : 'blur(8px)',
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}

function Hero() {
  const [showVerse, setShowVerse] = useState(false)
  const [showVisit, setShowVisit] = useState(false)
  const [showBible, setShowBible] = useState(false)
  const [book, setBook] = useState('John')
  const [chapter, setChapter] = useState(1)
  const [passage, setPassage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [slide, setSlide] = useState(0)
  const [showImage, setShowImage] = useState(false)
  const verse = getVerseOfTheDay()
  const todayLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const totalChapters = BOOKS.find(([name]) => name === book)?.[1] ?? 1

  // Auto change image every 2 seconds (pauses while big image is open)
  useEffect(() => {
    if (showImage) return
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_IMAGES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [showImage])

  useEffect(() => {
    if (!showBible) return
    const controller = new AbortController()
    setLoading(true)
    setError('')
    fetch(
      `https://bible-api.com/${encodeURIComponent(`${book} ${chapter}`)}?translation=kjv`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed')
        return res.json()
      })
      .then((data) => {
        setPassage(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('Could not load this chapter. Please check your internet and try again.')
          setLoading(false)
        }
      })
    return () => controller.abort()
  }, [showBible, book, chapter])

  const goNext = () => {
    if (chapter < totalChapters) return setChapter(chapter + 1)
    const i = BOOKS.findIndex(([n]) => n === book)
    if (i < BOOKS.length - 1) {
      setBook(BOOKS[i + 1][0])
      setChapter(1)
    }
  }

  const goPrev = () => {
    if (chapter > 1) return setChapter(chapter - 1)
    const i = BOOKS.findIndex(([n]) => n === book)
    if (i > 0) {
      setBook(BOOKS[i - 1][0])
      setChapter(BOOKS[i - 1][1])
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Hero grid */}
        <div className="grid gap-5 lg:grid-cols-[1.42fr_1fr]">
          {/* Left card */}
          <Reveal
            direction="left"
            className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 flex flex-col"
          >
            <Reveal delay={150}>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
                CHRISTIAN CHURCH
              </span>
            </Reveal>

            <Reveal delay={300}>
              <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-6xl md:text-7xl leading-[1.05] font-medium">
                In the presence 
                <br />
                of God
              </h1>
            </Reveal>

            <Reveal delay={450}>
              <p className="mt-6 max-w-[34rem] text-lg leading-8 text-slate-500">
                -You make know to me the path of life; in your presence there is fullness
                of joy at your right hand are pleasures forevermore.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowVisit(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span className="text-[10px]">◆</span> Plan your visit
                </button>
                <button
                  type="button"
                  onClick={() => setShowBible(true)}
                  className="rounded-full border border-slate-300 bg-white/60 text-sm font-medium px-5 py-3 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
                >
                  Read the Bible
                </button>
              </div>
            </Reveal>

            <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
              {[
                ["Sunday", "10:00 AM"],
                ["Saturday", "9:30 AM"],
                ["Address", "Bugnay, Tuao, Cagayan"],
              ].map(([label, value], i) => (
                <Reveal key={label} delay={750 + i * 150}>
                  <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                    {label}
                  </div>
                  <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                    {value}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right image slideshow + floating card */}
          <Reveal direction="right" delay={200} className="relative min-h-[420px]">
            {/* Clickable slideshow */}
            <button
              type="button"
              onClick={() => setShowImage(true)}
              aria-label="View image larger"
              className="absolute inset-0 rounded-[32px] overflow-hidden shadow-sm cursor-zoom-in"
            >
              {HERO_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    i === slide ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url('${src}')` }}
                />
              ))}
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    i === slide ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Floating card */}
            <Reveal
              direction="zoom"
              delay={700}
              className="absolute -left-6 -bottom-6 w-64 rounded-3xl border border-white/60 bg-white/60 backdrop-blur-md p-4 shadow-lg"
            >
              <div className="text-[11px] tracking-[0.15em] text-[#c49a4a] uppercase">
                Church Images
              </div>
              <div className="mt-1 font-['Cormorant_Garamond',serif] text-lg">
                Coramdeo Christian Church
              </div>
              <div className="mt-1 text-sm text-slate-500">
                In the presence of God
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>

      {/* Image viewer modal */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setShowImage(false)}
        >
          <button
            type="button"
            onClick={() => setShowImage(false)}
            aria-label="Close"
            className="absolute top-5 right-6 text-4xl text-white/80 hover:text-white cursor-pointer"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSlide((slide - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-4xl text-white/80 hover:text-white cursor-pointer"
          >
            ‹
          </button>

          <img
            src={HERO_IMAGES[slide]}
            alt="Coramdeo Christian Church"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-3xl shadow-xl object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setSlide((slide + 1) % HERO_IMAGES.length)
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-4xl text-white/80 hover:text-white cursor-pointer"
          >
            ›
          </button>
        </div>
      )}

      {/* Verse of the day modal */}
      {showVerse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setShowVerse(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[32px] bg-white p-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVerse(false)}
              aria-label="Close"
              className="absolute top-5 right-6 text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              Verse of the Day
            </span>
            <div className="mt-1 text-xs text-slate-400">{todayLabel}</div>
            <p className="mt-4 font-['Cormorant_Garamond',serif] text-2xl leading-9">
              {verse.text}
            </p>
            <div className="mt-4 text-sm text-slate-500">{verse.ref}</div>
          </div>
        </div>
      )}

      {/* Bible reader modal */}
      {showBible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setShowBible(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-[32px] bg-white p-8 md:p-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowBible(false)}
              aria-label="Close"
              className="absolute top-5 right-6 text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>

            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              Holy Bible · KJV
            </span>

            <div className="mt-4 flex flex-wrap gap-3">
              <select
                value={book}
                onChange={(e) => {
                  setBook(e.target.value)
                  setChapter(1)
                }}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm cursor-pointer"
              >
                <optgroup label="Old Testament">
                  {BOOKS.slice(0, 39).map(([name]) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </optgroup>
                <optgroup label="New Testament">
                  {BOOKS.slice(39).map(([name]) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </optgroup>
              </select>

              <select
                value={chapter}
                onChange={(e) => setChapter(Number(e.target.value))}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm cursor-pointer"
              >
                {Array.from({ length: totalChapters }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>Chapter {n}</option>
                ))}
              </select>
            </div>

            <h2 className="mt-6 font-['Cormorant_Garamond',serif] text-3xl font-medium">
              {book} {chapter}
            </h2>

            <div className="mt-4 flex-1 overflow-y-auto pr-2">
              {loading && <p className="text-slate-500">Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {!loading && !error && passage && (
                <div className="font-['Cormorant_Garamond',serif] text-xl leading-9">
                  {passage.verses.map((v) => (
                    <p key={v.verse} className="mb-2">
                      <sup className="mr-1 text-xs text-[#c49a4a] font-['Inter',sans-serif]">
                        {v.verse}
                      </sup>
                      {v.text.trim()}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-full border border-slate-300 text-sm font-medium px-5 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-2 hover:bg-[#1c2a3a] transition-colors cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Plan your visit modal */}
      {showVisit && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setShowVisit(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[32px] bg-white p-10 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVisit(false)}
              aria-label="Close"
              className="absolute top-5 right-6 text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              Plan Your Visit
            </span>
            <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-3xl font-medium">
              We'd love to see you
            </h2>

            <div className="mt-6">
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Service Times
              </div>
              <div className="mt-2 space-y-1">
                {VISIT_INFO.services.map((s) => (
                  <div key={s.day} className="flex justify-between font-['Cormorant_Garamond',serif] text-xl">
                    <span>{s.day}</span>
                    <span>{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Address
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                {VISIT_INFO.address}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[12px] tracking-[0.15em] text-slate-600 uppercase">
                What to Expect
              </div>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {VISIT_INFO.expect.map((item) => (
                  <li key={item} className="flex gap-1">
                    <span className="text-[#c49a4a] text-[11px] mt-1.5">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {VISIT_INFO.contact && (
              <div className="mt-6">
                <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                  Contact
                </div>
                <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                  {VISIT_INFO.contact}
                </div>
              </div>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VISIT_INFO.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors"
            >
              <span className="text-[10px]">◆</span> Get directions
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero