import numpy as np
from kit import Agent, Team, Direction, apply_direction
import math
import random
import sys
import gym
from gym import spaces
from gym_game.envs.pygame_2d import PyGame2D

NUM_FEATURE_SETS = 2
LOW_LEVEL_FEATURE_SET, HIGH_LEVEL_FEATURE_SET = list(range(NUM_FEATURE_SETS))

NUM_HAS_ACTIONS = 8
NORTH, SOUTH, EAST, WEST, NORTHEAST, SOUTHEAST,SOUTHWEST,NORTHWEST= list(range(NUM_HAS_ACTIONS))
ACTION_STRINGS = {NORTH: "North",
                  SOUTH: "South",
                  WEST: "West",
                  EAST: "East",
                  NORTHEAST: "Northeast",
                  SOUTHEAST: "Southeast",
                  SOUTHWEST: "Southwest",
                  NORTHWEST: "Northwest"
                  }

NUM_GAME_STATUS_STATES = 8
IN_GAME, END_GAME, CAPTURE_HIDER, SEEK_HIDER, CHASE_HIDER, HIDE, RUNFROM_SEEKER, CAUGHTBY_CHASER = list(range(NUM_GAME_STATUS_STATES))
STATUS_STRINGS = {IN_GAME: "InGame",
                  END_GAME: "EndGame",
                  CAPTURE_HIDER: "CaptureHider",
                  SEEK_HIDER: "SeekHider",
                  CHASE_HIDER: : "ChaseHider",
                  HIDE: "Hide",
                  RUNFROM_CHASER: "RunFromChase",
                  CAUGHTBY_CHASER: "CaughtByChaser"
                  }

class HASEnvironment(object):
  def __init__(self):
      self.env = Agent()
      self.env.initialize() # my game environment
      self.action_space = spaces.Discrete(NUM_HAS_ACTIONS)
      self.observation_space = spaces.Box(np.zeros(4), np.zeros(48), dtype=np.int)
#vision, location,

  def getStatusSize(self):
      self.agent

  def getStatus(self):
      pass

  def act(self, action_type, *args):
      pass

  def actionToString(self,action):
      pass

  def statusToString(self,status):
      pass
  def getAliveTeammates(self):
      pass
  def getNumOpponents(self):
      pass
  def SeekerCatch(self):
      pass
