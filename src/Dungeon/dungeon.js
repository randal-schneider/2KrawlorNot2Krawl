import NewDungeon from 'random-dungeon-generator';


const options = {
  width: 50,
  height: 50,
  minRoomSize: 5,
  maxRoomSize: 20
}

const generateDungeon = () => {
  return NewDungeon(options);
}

export default generateDungeon;