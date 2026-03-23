import BaseCanvas from './BaseCanvas'
import Metaball from './Metaball'

export default class AppCanvas extends BaseCanvas {
  constructor() {
    super()
    this.isReady = false
    this.init()
  }
  async init() {
    // Metaball Meshを作成してシーンに追加
    this.metaball = new Metaball()
    await this.metaball.init()
    this.scene.add(this.metaball.mesh)
    // リサイズをしておいて準備完了
    this.resize()
    this.isReady = true
  }

  resize() {
    this.setConfig()
    this.resizeScene()
    if (this.metaball) {
      this.metaball.resize()
    }
  }

  update({ time, deltaTime }) {
    if (!this.isReady) return

    // MeshとRendererを更新
    this.metaball.update({ time, deltaTime })
    this.renderer.render(this.scene, this.camera)
  }
}
