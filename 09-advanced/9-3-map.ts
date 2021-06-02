{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  
  // [1, 2].map(item => item * item); // [1, 4]
  
  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  }
  
  type VideoOptional = Optional<Video>;
  
  type Animal = {
    name: string,
    age: number,
  };
  
  const animal: Optional<Animal> = {
    name: 'dog',
  }
  
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }
  
  animal.name = 'cat';
  
  const video: Readonly<Video> = {
    title: 'hi',
    author: 'bill',
    description: 'lorem ipsum'
  };
  
  // video.author = 'he' // can't change
  
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  
  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}