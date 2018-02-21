module base {
    export abstract class Tank extends createjs.Bitmap {
      // private instance variables
      protected _keyboardEvent: KeyboardEvent; 

      protected _tankSpeed: number;
      protected _tankLife: number;
      protected _bulletRange: number;
      protected _bulletSpeed: number;
      protected _bulletPower: number;

     protected _left :string;
     protected _right :string;
     protected _up :string;
     protected _down :string;
  
      // public properties
      public Width: number;
      public Height: number;
      public HalfWidth: number;
      public HalfHeight: number;
      public LayerIndex : number;
      
      
  
      // constructors
      constructor(imageString:string) {
        super(Core.GameManager.assetManager.getResult(imageString));
        this.name = imageString;
        this._initialize();
    }
      // private methods
      private _initialize():void {
        this.Width = this.getBounds().width;
        this.Height = this.getBounds().height;
        this.HalfWidth = this.Width * 0.5;
        this.HalfHeight = this.Height * 0.5;
        this.regX = this.HalfWidth;
        this.regY = this.HalfHeight;
        this.Start();
      }
  
      // public methods
      public Start(): void {

      }
  
      public Update(): void {
        
        this._keyboardEvent = Core.GameManager.KeyboardEvent;
        this.Move();
      }
  
      public Reset():void {
  
      }
  
      public CheckBounds():void {
  
      }
  
      public Move():void {
        
        if (this._keyboardEvent !=null)
        {       
         switch(this._keyboardEvent.key) {
          case this._left:
            this.x-=this._tankSpeed;
            this.rotation = -90;
            
          break;
          case this._right:
            this.x+=this._tankSpeed;
            this.rotation = +90;
          break;
          case this._down:
            this.y+=this._tankSpeed;
            this.rotation = 180;
          break;
          case this._up:
          this.y-=this._tankSpeed;
          this.rotation = 0;
        break;
        }
          Core.GameManager.KeyboardEvent = null;
        }
      }

    }
  }
  