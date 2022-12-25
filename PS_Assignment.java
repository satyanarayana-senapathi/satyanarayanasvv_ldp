import java.util.*;
public class PS_Assignment {
		    private static void busRoute(int[][] graph,int start,int destination)
		    {
		        int cities = graph[0].length;
		        int[] value = new int[cities];
		        boolean[] processed = new boolean[cities];
		        for (int vertexIndex = 0; vertexIndex < cities;vertexIndex++)
		        {
		            value[vertexIndex] = Integer.MAX_VALUE;
		            processed[vertexIndex] = false;
		        }
		        value[start] = 0;
		        int[] parents = new int[cities];
		        parents[start] = -1;
		        for (int row = 1; row < cities; row++)
                {
		            int nearestVertex = -1;
		            int shortestDistance = Integer.MAX_VALUE;
		            for (int vertexIndex = 0;vertexIndex < cities;vertexIndex++)
		            {
		                if (!processed[vertexIndex] &&value[vertexIndex] < shortestDistance)
		                {
		                    nearestVertex = vertexIndex;
		                    shortestDistance = value[vertexIndex];
		                }
		            }
		            processed[nearestVertex] = true;
		            for (int vertexIndex = 0;vertexIndex < cities;vertexIndex++)
		            {
		                int edge = graph[nearestVertex][vertexIndex];
		                 
		                if (edge > 0 && ((shortestDistance + edge) < value[vertexIndex]))
		                {
		                    parents[vertexIndex] = nearestVertex;
		                    value[vertexIndex] = shortestDistance + edge;
		                }
		            }
		        }
		        printSolution(start, value, parents,destination);
		    }
		    private static void printSolution(int start,int[] distances,int[] parents,int destination)
		    {
		        int nVertices = distances.length;
		        System.out.print("start-destination\t Distance\tPath");
		        System.out.print("\n" + start + " -> ");
		                System.out.print("\t"+destination + " \t\t ");
		                System.out.print(distances[destination] + "\t\t");
		                printPath(destination, parents);
		    }
		    private static void printPath(int destination,int[] parents)
		    {
		        if (destination == -1) return;
		        printPath(parents[destination], parents);
		        System.out.print("-->"+destination);
		    }
		    public static void main(String[] args)
		    {
		    	Scanner sc=new Scanner(System.in);
		    	System.out.println("Enter start Location");
		    	int start=sc.nextInt();
		    	System.out.println("Enter Destination Location");
		    	int destination=sc.nextInt();
		        int[][] graph = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
		                                    { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
		                                    { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
		                                    { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
		                                    { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
		                                    { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
		                                    { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
		                                    { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
		                                    { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
		        busRoute(graph,start,destination);
		    }
		}
