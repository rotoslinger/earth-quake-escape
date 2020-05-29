namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . 2 2 . . . . . d d d 
. . . . . 2 2 2 2 . . . d d d d 
. . . . 2 2 2 2 2 2 . . e e e . 
. . . 2 2 2 2 2 2 2 2 . e e e . 
. . 2 2 2 2 2 2 2 2 2 2 e e e . 
. 2 2 2 2 2 2 2 2 2 2 2 2 e e . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
2 2 2 e e e e e e e e 2 2 2 2 2 
2 2 2 2 e e e e f e 2 2 2 2 2 2 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
2 2 2 2 e e e e e e 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . a . . . . . 
a a . . . . . . . a a a . a . . 
a . . . . a . . . . a . . a . . 
a a . a a a . a . . a . . a . . 
a . . a . a . a a . a . . a a a 
a a . a a a . a . . a . . a . a 
. . . . . . . . . . . . . . . . 
a a a . . . . . . . . . . . . . 
a . a . . . . . . . . a . . . . 
a a a . a . . a . a a a . . . . 
. . a . a . . a . a . a . a a a 
. . . . a a a a . a a a . . . . 
a . a . . . . . . . . . . . . . 
a a a . a a . . a . . . a a a . 
. . a . a . . . a a a . a . a . 
a a a . a a . . a . a . a a a . 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f 1 1 1 f . . . . . 
. . . . . . f 1 f 1 f . . . . . 
. . . . . . f 1 1 1 f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . f f . f f . . . . . 
`, SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true, effects.hearts)
})
let mySprite: Sprite = null
info.startCountdown(20)
scene.cameraShake(4, 20000)
info.setScore(10)
info.setLife(70)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020206020201020202020201020202020201020202020202010202010202010202020202010201020201020201020202020102020102020202020202020202010202020202020202010202010201020202020202020102020202010202020202020202020202020201020202020201020202020202020102020202020102020202010201020202020101020202010201020202020202010201020102020202020202020201020202020202020102010201020202020202010201020202020202020202020102010102010101020201020102020202020201020102020202020202020202010102010501010202010202010201`,
            img`
. . . . . . . . . . . . . . . . 
. . 2 . . . . . 2 . . . . . 2 . 
. . . . . 2 . . 2 . . 2 . . . . 
. 2 . 2 . . 2 . . 2 . . . . 2 . 
. 2 . . . . . . . . . . 2 . . . 
. . . . . 2 . . 2 . 2 . . . . . 
. . 2 . . . . 2 . . . . . . . . 
. . . . . 2 . . . . . 2 . . . . 
. . . 2 . . . . . 2 . . . . 2 . 
2 . . . . 2 2 . . . 2 . 2 . . . 
. . . 2 . 2 . 2 . . . . . . . . 
. 2 . . . . . . . 2 . 2 . 2 . . 
. . . . 2 . 2 . . . . . . . . . 
. 2 . 2 2 . 2 2 2 . . 2 . 2 . . 
. . . . 2 . 2 . . . . . . . . . 
. 2 2 . 2 . 2 2 . . 2 . . 2 . 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.coral2,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f 1 1 1 f . . . . . 
. . . . . . f 1 f 1 f . . . . . 
. . . . . . f 1 1 1 f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . f f . f f . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 . . . . . . . . . 
. . . . . 3 3 3 3 . . . . . . . 
. . . . 3 3 3 3 3 3 . . . . . . 
. . . . 3 f 3 3 3 3 . . . . . . 
. . 3 3 3 3 3 3 3 3 . . . . . . 
. . 3 3 3 3 3 3 3 3 . . . . . . 
. . 3 3 3 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 . . . . . . 
. . . . . 3 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
let mySprite3 = sprites.create(img`
. . . . . . . . c c c c c . . . 
. . . . . . c c 5 5 5 5 5 c . . 
. . . . . c 5 5 5 5 5 5 5 5 c . 
. . . . c b b b b b b 5 5 5 c . 
. . . . c 1 1 b b 1 b b c c . . 
. . . c 1 1 1 b b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 c . c c 
. . . c d 1 1 1 b 1 1 1 b b 5 c 
. . c c d 1 c 1 b 1 b 1 5 5 5 c 
. c c d d 1 1 1 1 1 b 1 b b 5 c 
f d d d 1 1 1 1 1 b b 1 f . c c 
f f f 1 1 1 1 1 1 b b b f . . . 
. . . f f 1 1 1 b b b 5 5 f . . 
. . . . . f f f 5 5 5 5 5 f . . 
. . . . . . . . f f f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite3, sprites.castle.tileGrass2)
let mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite4, sprites.castle.tileGrass2)
let mySprite5 = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite5, sprites.castle.tileGrass2)
forever(function () {
    controller.player2.moveSprite(mySprite3, 100, 100)
})
