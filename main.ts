scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . 2 2 . . . . . . . . . . . . 
        . 4 4 2 2 4 4 4 4 4 . . . . . . 
        . 2 4 4 4 2 2 2 2 2 4 . . . . . 
        4 2 2 4 4 2 4 4 4 2 2 4 . . . . 
        4 4 4 2 2 4 2 2 2 4 2 4 . . . . 
        2 2 4 4 4 4 2 2 2 4 2 4 . . . . 
        4 2 2 2 2 4 2 2 2 4 2 4 . . . . 
        4 4 4 4 2 2 4 4 4 2 2 4 . . . . 
        4 4 4 2 2 2 2 2 2 2 4 . . . . . 
        4 4 2 2 4 4 2 4 4 4 . . . . . . 
        . 4 4 4 4 2 2 . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, controller.dx(10000), controller.dy(10000))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    Ghost.destroy()
})
info.onLifeZero(function () {
    game.over(false)
})
function ghosts () {
    Ghost = sprites.createProjectileFromSide(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, 0, 50)
    Ghost.setPosition(27, 110)
    Ghost.x = randint(0, 0)
    Ghost.setKind(SpriteKind.Enemy)
    Ghost.follow(mySprite, 30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Ghost: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(41, 33)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
ghosts()
