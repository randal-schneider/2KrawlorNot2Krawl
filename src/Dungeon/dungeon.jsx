import NewDungeon from 'random-dungeon-generator';


const options = {
  width: 50,
  height: 50,
  minRoomSize: 5,
  maxRoomSize: 20
}

const generateDungeon = () => {
  const NewDungeon = NewDungeon(options);


}

export default generateDungeon;