import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Current track"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="font-medium">Summer Nights</h4>
            <p className="text-sm text-gray-400">The Midnight</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipBack size={24} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipForward size={24} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full hover:bg-green-500 cursor-pointer"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full hover:bg-green-500 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}