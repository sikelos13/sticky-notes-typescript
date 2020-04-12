## Sticky Notes App

Sticky notes e is a simple notes webapp , inspired by
OSx notes app layout. It's meant to be used for the hiring process evaluation.

## Build With

* [Docker](https://www.docker.com/)
* [Material UI](https://material-ui.com/)
* [Create-react-app with Typescript template](https://create-react-app.dev/docs/adding-typescript/)

### Prerequisites

The project is running on docker so only docker need to be installed.

 **install docker separately see details here** [Docker Installation](https://docs.docker.com/install/)

If you want to run in development mode then:

```
cd detectify_frontend_challenge

npm install
npm start
```

 **npm install** is prerequisite for testing too.

### Docker build and run

To run the current project install the prerequisites inside project's directory.
I have used multi-stage build in Docker, in order to optimize the size of the built image. 
As you will see in the Dockerfile, an initial node-based phase is utilized only for building the static assets, which are then copied over and served from a stripped-down nginx image. 
In order to run the project please run:

```
cd detectify_frontend_challenge

docker build . -t detectify
docker run -p 80:80 detectify
```

 *Note for docker:* Open **localhost** (without a port).

### Features implemented
* Search field with on change search action
* If search results are null disable the editor
* If user deletes the currently selected note it will automatically select the next from the top of the list
* Delete notes from list easily with one click
* Delete notes from filtered list after search action
* Create note
* Notes that are being edit will be automatically saved on the fly
* Notes will be persisted in localStorage of user's browser
* Markdown parser implemented with [React Markdown](https://github.com/rexxars/react-markdown)
* Project has been Dockerized 

<i>Note for Markdown functionality:</i> <strong>Markdown will only show a readonly version of the note as a preview (see Github's README functionality)</strong>

### Components Tree (Inside src directory)

```bash
├── __tests__
│   └── components
│       ├── Header.test.tsx
│       ├── NoteContainer.test.tsx
│       ├── NoteEditor.test.tsx
│       └── NotesList.test.tsx
│   └── containers
│       └── NotesApp.test.tsx
│   └── utils.test.ts
│  
├── components
│   └── components
│       └── Header.tsx
│       ├── NoNoteSelected.tsx
│       ├── NoteContainer.tsx
│       ├── NoteEditor.tsx
│       └── NoteList.tsx
│  
└── containers
│    └── NotesApp.tsx
│  
└── styles
│    ├── header.tsx
│    ├── noteeditor.tsx
│    └── noteslist.tsx
│  
├── App.scss
├── App.test.tsx
├── App.tsx
├── history.ts
├── index.tsx
├── Routes.tsx
├── setupTests.ts
├── theme.tsx
├── types.ts
└── utils.ts
```

### Testing build with

* [Jest for React](https://jestjs.io/)
* [Enzyme for jest](https://enzymejs.github.io/enzyme/)

### Testing

For testing i have used jest framework together with enzyme to render components.
To run the test type:

```
npm test
```

To run test with coverage run:

```
npm test -- --coverage
```

## Authors

* **Stefanos Athanasoulias**

### User activity diagram

Image can be found at (/public/images/activity_diagram.png)

![activity diagram](/public/images/activity_diagram.png)