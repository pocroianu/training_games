/**
 *
 */
export class ShipGraphics extends PIXI.Graphics {

    public player: string;

    /**
     *
     * @param player
     * @param nativeLines
     */
    constructor(player: string, nativeLines: boolean) {
        super(nativeLines);
        this.player = player;
    }
}